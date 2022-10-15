import {
  Button,
  Center,
  Code,
  createStyles,
  Input,
  Space,
  Text,
  TextInput,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { useContractWrite } from 'wagmi-lfg';
import { Gates__factory } from 'web3-config';
import useAddress from '../hooks/useAddress';
import useEvent from '../hooks/useEvent';
import useSnapshot from '../hooks/useSnapshot';
import SnapShoter from '../utils/Snapshoter';

type Props = { addresses: string[] };

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },
}));

const SnapshotHandler = ({ addresses }: Props) => {
  const [start, setStart] = useState(false);
  const { write, isLoading } = useContractWrite(
    Gates__factory,
    'createSnapShot',
    {
      reckless: true,
    }
  );
  const [gateId, setGateId] = useState('');
  const [final, setFinal] = useState([]);
  const [res, setResponse] = useState<any>(null);
  const { address } = useAccount();
  const { failed, success, end } = useSnapshot(addresses, gateId, start, {
    onEnd: (_addresses) => {
      setFinal(_addresses);
    },
  });

  useEvent(Gates__factory, 'SnapshotCreated', {
    onChange: (data) => {
      if (data[2] == address) {
        setResponse({
          snapshotId: data[0],
          gateId: data[1],
          creator: data[2],
        });
      }
    },
  });

  const { classes } = useStyles();
  const gatesAddress = useAddress(Gates__factory);

  if (res) {
    return (
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div>
          <Center>
            <Text size={'xl'}>
              How to validate users in your smart contract:
            </Text>
          </Center>
          <div>
            <Space h={10} />
            <Text size={'md'}>
              Your snapshot id is {res.snapshotId} and now can be used to verify
              your users on-chain. Extend our smart contract in a smooth way and
              then see if the user is elligble.
            </Text>
          </div>
        </div>{' '}
        <Space h={47} />
        <Code
          block
          color="blue"
          style={{
            borderRadius: 10,
            padding: 20,
            width: '100%',
            backgroundColor: '#ededed',
          }}
        >
          <code id="codeElm">
            {`
          import './IGates.sol';

          contract MintTest {
              function yourFunction() external {
                  address gatesAddress = ${gatesAddress};
                  bytes32 snapshotId = ${res.snapshotId};
                  
                  bool elligble = IGates(gatesAddress)
                      .verify(msg.sender, snapshotId);
                  require(elligble, 'User not allowed to procced');
                  // ...
              }
          }
        `}
          </code>
        </Code>
      </div>
    );
  }

  if (!start) {
    return (
      <div>
        <TextInput
          placeholder="your gate id"
          value={gateId}
          classNames={classes}
          onChange={(e) => {
            if (!isNaN(e.target.value)) {
              setGateId(e.target.value);
            }
          }}
        ></TextInput>
        {addresses.length} addresses found.{' '}
        <Button disabled={gateId.length === 0} onClick={() => setStart(true)}>
          Click here to generate on-chain snapshot
        </Button>
      </div>
    );
  }

  if (end) {
    return (
      <div>
        {success} addresss found!{' '}
        <Button
          loading={isLoading}
          disabled={!address}
          onClick={() => {
            write({
              args: [gateId, final],
            });
          }}
        >
          Lets put it on chain
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div>Total addresses: {addresses.length}</div>
      <div>Failed: {failed}</div>
      <div>Success: {success}</div>
    </div>
  );
};

export default SnapshotHandler;
