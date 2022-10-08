import { ethers } from 'ethers';
import { useAccount, useSignMessage } from 'wagmi';
import { useContractRead } from 'wagmi-lfg';
import { Gates__factory } from 'web3-config';

type Props = {};

const CreateSigning = ({}: Props) => {
  const gateId = 0;
  const { data: msgHash } = useContractRead(Gates__factory, 'getMessageHash', {
    args: [gateId],
  });

  const { address } = useAccount();
  const { data: signature, signMessage } = useSignMessage({
    message: msgHash && ethers.utils.arrayify(msgHash),
    onError: () => {
      console.log('ERRR:: useSignMessage');
    },
  });

  if (signature) {
    return <div>Signature: {signature}</div>;
  }
  return <button onClick={() => signMessage()}>Create signing</button>;
};

export default CreateSigning;
