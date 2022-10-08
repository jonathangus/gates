import { ethers } from 'ethers';
import { useAccount, useProvider, useSigner, useSignMessage } from 'wagmi';
import { getMsg } from '../utils/sign-message';
import { DIDSession } from 'did-session';
import { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum';
import { EthereumAuthProvider } from '@ceramicnetwork/blockchain-utils-linking';
import { compose } from '../utils/compose';
import { CacaoBlock, SiweMessage } from 'ceramic-cacao';

console.log({ compose });
const CreateSigning = () => {
  const { address } = useAccount();
  const msg = getMsg(address);
  const signer = useSigner();

  const siwe = new SiweMessage({
    domain: 'gates.wtf',
    address: address,
    uri: `did:pkh:eip155:1:${address}`,
    chainId: '1',
    version: '1',
    issuedAt: new Date().toISOString().replace(/\..+/, 'Z'),
    resources: compose.resources,
  });

  console.log(siwe.signMessage());

  // const { mutate: upload } = useMutation((signature: string) =>
  //   axios.post('/api/save-data', {
  //     signature,
  //     message: msg,
  //     wallet: address,
  //     github: 'asd1',
  //   })
  // );
  const uploadData = (sig: string) => {
    // upload(sig);
  };

  const { data, signMessage } = useSignMessage({
    message: msg,
    onError: (err) => {
      console.log('ERRR:: useSignMessage', err);
    },
    onSuccess: (sig) => {
      uploadData(sig);
    },
  });

  const provider = useProvider();

  const gogo = async () => {
    try {
      const authProvider = new EthereumAuthProvider(
        // @ts-ignore
        window.ethereum,
        address
      );

      const session = await DIDSession.authorize(authProvider, {
        resources: compose.resources,
      });
      console.log(session);
    } catch (e) {
      console.error(e);
    }
  };

  // const gateId = 0;
  // const { data: msgHash } = useContractRead(Gates__factory, 'getMessageHash', {
  //   args: [gateId],
  // });

  // const { address } = useAccount();
  // const { data: signature, signMessage } = useSignMessage({
  //   message: msgHash && ethers.utils.arrayify(msgHash),
  //   onError: () => {
  //     console.log('ERRR:: useSignMessage');
  //   },
  // });

  // if (signature) {
  //   return <div>Signature: {signature}</div>;
  // }

  return <button onClick={() => gogo()}>Create signing</button>;
};

export default CreateSigning;
