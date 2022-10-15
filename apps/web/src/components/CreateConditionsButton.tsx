import {
  Button,
  CopyButton,
  Popover,
  Space,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { BigNumber, ethers } from 'ethers';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { useContractWrite } from 'wagmi-lfg';
import { Gates__factory } from 'web3-config';
import useEvent from '../hooks/useEvent';
import { hasMinTokenBalance } from '../sources/quicknode/commands';
import { useFieldStore } from '../stores/useFieldStore';
import { CopyIcon } from './CurrentConditons';

type Props = { gatedConditions: any[] };

const CreateConditionsButton = ({ gatedConditions = [] }: Props) => {
  const fields = useFieldStore((state) => state.fields);
  const itemz = Object.values(fields).map((value) => {
    const data = value.field;
    return value.id + ':' + value.element.key + ':' + JSON.stringify(data);
  });

  const { address } = useAccount();

  const [gateId, setGateId] = useState<BigNumber>();
  useEvent(Gates__factory, 'Created', {
    // args: [null, address],
    onChange: (data) => {
      if (data[1] == address) {
        setGateId(data[0]);
      }
    },
  });

  const items = JSON.stringify(itemz);
  // const items = JSON.stringify([
  //   // `api:get:${JSON.stringify(apiData)}`,
  //   // `the-graph:query:${JSON.stringify(theGraph)}`,
  //   // `the-graph:minENSs:${JSON.stringify({
  //   //   minNumber: 2,
  //   // })}`,
  //   `quicknode:ownsNFT:${JSON.stringify({
  //     contractAddress: '0x745fc083f4336a4151c76de9f598e0f67991c3fa', // mems
  //   })}`,
  //   // `api:get:${JSON.stringify(apiData)}`,
  //   // `the-graph:query:${JSON.stringify(theGraph)}`,
  //   // `quicknode:ownsNFT:${JSON.stringify({
  //   //   contractAddress: '0xED5AF388653567Af2F388E6224dC7C4b3241C544', // azuki
  //   // })}`,
  //   // `quicknode:hasMinTokenBalance:${JSON.stringify({
  //   //   contractAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // usdc
  //   //   minAmount: 100 * Math.pow(10, 6),
  //   // })}`,
  //   // `github:repoAccess:${JSON.stringify({
  //   //   repoPath: 'jonathangus/gates',
  //   // })}`,
  //   // `twitter:twitter.follow:${JSON.stringify(twitterData)}`,
  //   // `worldcoin:verify:`,
  // ]);

  const condition = ethers.utils.toUtf8Bytes(items);

  const { write, isLoading } = useContractWrite(Gates__factory, 'add', {
    reckless: true,
  });

  const create = () => {
    console.log(itemz);
    console.log('GOOGO');
    write({ args: [condition] });
  };

  if (gateId) {
    return (
      <Popover width={450} position="bottom" shadow="md">
        <Popover.Target>
          <Button
            style={{
              backgroundColor: '#38C953',
              color: 'white',
              width: '100%',
              height: 30,
            }}
          >
            Copy endpont for gate with id: {gateId?.toString()}
          </Button>
        </Popover.Target>
        <Popover.Dropdown
          color="black"
          style={{
            width: 600,
            backgroundColor: '#424A54',
            color: '#FA9999',
            borderColor: '#424A54',
          }}
        >
          <Text size="sm" style={{ display: 'flex' }}>
            <div style={{ paddingTop: 1 }}>
              <CopyButton
                value={
                  'https://gates.wtf/api/verify?address=${address}&gateId=' +
                  gateId.toString()
                }
              >
                {({ copied, copy }) => (
                  <UnstyledButton onClick={copy}>
                    <CopyIcon color={copied ? '#37C853' : 'white'} />
                  </UnstyledButton>
                )}
              </CopyButton>
            </div>
            <Space w={10} />
            <Text style={{ color: 'white' }}>GET </Text>
            <Space w={5} />
            {'https://gates.wtf/api/verify?address=${address}&gateId=' +
              gateId.toString()}
          </Text>
        </Popover.Dropdown>
      </Popover>
    );
  }
  return (
    <Button
      disabled={!address}
      // disabled={itemz.length == 0}
      loading={isLoading}
      onClick={create}
      style={{
        backgroundColor: '#38C953',
        color: 'white',
        width: '100%',
        height: 30,
      }}
    >
      Create conditions
    </Button>
  );
};

export default CreateConditionsButton;
