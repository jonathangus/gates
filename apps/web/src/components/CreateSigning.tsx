import { useAccount } from 'wagmi';
import { DIDSession } from 'did-session';
import { compose } from '../utils/compose';
import { EthereumAuthProvider } from '@ceramicnetwork/blockchain-utils-linking';
import axios from 'axios';
import { useUserStore } from '../stores/useUserStore';

const CreateSigning = () => {
  const { address } = useAccount();

  const githubToken = useUserStore((state) => state.githubToken);
  console.log({ githubToken });
  const uploadData = (did: string) => {
    axios.post('/api/save-data', {
      wallet: address,
      did,
      userData: {
        githubToken: 'plz',
        twitterToken: 'work',
      },
    });
  };

  const signData = async () => {
    try {
      const authProvider = new EthereumAuthProvider(window.ethereum, address);
      const session = await DIDSession.authorize(authProvider as any, {
        resources: compose.resources,
      });

      uploadData(session.serialize());
    } catch (e) {
      console.error(e);
    }
  };

  return <button onClick={() => signData()}>Create signing</button>;
};

export default CreateSigning;
