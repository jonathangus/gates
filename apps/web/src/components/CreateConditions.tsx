import { BigNumber, ethers } from 'ethers';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { useContractWrite } from 'wagmi-lfg';
import { Gates__factory } from 'web3-config';
import useEvent from '../hooks/useEvent';

type Props = {};

const CreateConditions = ({}: Props) => {
  const { address } = useAccount();
  const apiData = {
    endpoint: 'https://jsonplaceholder.typicode.com/todos/1',
    selector: 'title',
    result: 'delectus aut autem',
  };
  const theGraph = {
    endpoint: 'https://api.thegraph.com/subgraphs/name/ensdomains/ens',
    selector: 'data.domain.name',
    result: 'jont.eth',
    query: `{
        domain(id:"0x5fd41c0b70d42da6abd27640b5f5a22964f019d30e9eefc4a06be3c460d50c34") {
          id
          name
          labelName
          labelhash
        } 
      }
    `,
  };
  const [gateId, setGateId] = useState<BigNumber>();
  const events = useEvent(Gates__factory, 'Created', {
    // args: [null, address],
    onChange: (data) => {
      setGateId(data[0]);
    },
  });

  const twitterData = { account: '0xjont' };
  const items = JSON.stringify([
    // `api:get:${JSON.stringify(apiData)}`,
    `the-graph:query:${JSON.stringify(theGraph)}`,
    // `twitter:twitter.follow:${JSON.stringify(twitterData)}`,
  ]);

  const condition = ethers.utils.toUtf8Bytes(items);

  const { write, isLoading } = useContractWrite(Gates__factory, 'add', {
    reckless: true,
  });

  const create = () => {
    write({ args: [condition] });
  };
  if (gateId) {
    return <div>Created gateId: {gateId.toString()}</div>;
  }

  return (
    <button disabled={isLoading} onClick={create}>
      {'Create conditions'}
    </button>
  );
};

export default CreateConditions;
