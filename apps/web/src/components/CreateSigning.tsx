import { ethers } from 'ethers';
import { useState } from 'react';
import { useAccount, useSignMessage } from 'wagmi';
import { useContractRead } from 'wagmi-lfg';
import { Gates__factory } from 'web3-config';

type Props = {};

const CreateSigning = ({}: Props) => {
  const requestId = 1;
  const [sig, setSignature] = useState('');
  const { data: msgHash } = useContractRead(Gates__factory, 'getMessageHash', {
    args: [requestId],
  });

  const { address } = useAccount();
  const { data: signature, signMessage } = useSignMessage({
    message: msgHash && ethers.utils.arrayify(msgHash),
    onError: () => {
      console.log('ERRR:: useSignMessage');
    },
    onSuccess: (sig) => {
      setSignature(sig);
    },
  });

  const { data: response } = useContractRead(Gates__factory, 'verify', {
    args: [address, requestId, sig],
  });

  console.log({ response });
  return <button onClick={() => signMessage()}>Create signing</button>;
};

export default CreateSigning;
