import { ethers } from 'ethers';
import { useContractWrite } from 'wagmi-lfg';
import { Gates__factory } from 'web3-config';

type Props = {};

const CreateConditions = ({}: Props) => {
  const apiData = {
    endpoint: 'http://localhost:3000/',
    selector: 'data.model.name',
    result: 'vitaltik',
  };
  const twitterData = { account: '0xjont' };
  const items = JSON.stringify([
    `api:api.get:${JSON.stringify(apiData)}`,
    `twitter:twitter.follow:${JSON.stringify(twitterData)}`,
  ]);
  const condition = ethers.utils.toUtf8Bytes(items);

  const { write, isLoading } = useContractWrite(Gates__factory, 'add', {
    args: [condition],
  });

  const create = () => {
    write();
  };

  return (
    <button disabled={isLoading} onClick={create}>
      Create conditions
    </button>
  );
};

export default CreateConditions;
