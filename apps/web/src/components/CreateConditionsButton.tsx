import { Button } from '@mantine/core';
import { BigNumber, ethers } from 'ethers';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { useContractWrite } from 'wagmi-lfg';
import { Gates__factory } from 'web3-config';
import useEvent from '../hooks/useEvent';
import { hasMinTokenBalance } from '../sources/quicknode/commands';
import { useFieldStore } from '../stores/useFieldStore';

type Props = { gatedConditions: any[] };

const CreateConditionsButton = ({ gatedConditions = [] }: Props) => {
  const fields = useFieldStore((state) => state.fields);

  const itemz = Object.values(fields).map((value) => {
    const data = value.field;
    return value.id + ':' + value.element.key + ':' + JSON.stringify(data);
  });

  const { address } = useAccount();
  // const apiData = {
  //   endpoint: 'https://jsonplaceholder.typicode.com/todos/1',
  //   selector: 'title',
  //   result: 'delectus aut autem',
  // };
  // const theGraph = {
  //   endpoint: 'https://api.thegraph.com/subgraphs/name/ensdomains/ens',
  //   selector: 'data.domain.name',
  //   result: 'jont.eth',
  //   query: `{
  //       domain(id:"0x5fd41c0b70d42da6abd27640b5f5a22964f019d30e9eefc4a06be3c460d50c34") {
  //         id
  //         name
  //         labelName
  //         labelhash
  //       }
  //     }
  //   `,
  // };
  const [gateId, setGateId] = useState<BigNumber>();
  const events = useEvent(Gates__factory, 'Created', {
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
      <Button
        disabled
        style={{
          backgroundColor: '#38C953',
          color: 'white',
          width: '100%',
          height: 30,
        }}
      >
        Created gateId: {gateId.toString()}
      </Button>
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
