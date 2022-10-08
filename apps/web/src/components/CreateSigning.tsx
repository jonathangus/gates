import { ethers } from 'ethers';
import { useAccount, useProvider, useSigner, useSignMessage } from 'wagmi';
import { getMsg } from '../utils/sign-message';
import { DIDSession } from 'did-session';
import { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum';
import { compose } from '../utils/compose';
import { CacaoBlock, SiweMessage } from 'ceramic-cacao';
import { EthereumAuthProvider } from '@ceramicnetwork/blockchain-utils-linking';
import { useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const CreateSigning = () => {
  const { address } = useAccount();
  const msg = getMsg(address);
  const signer = useSigner();

  const uploadData = (did: string) => {
    axios.post('/api/save-data', {
      wallet: address,
      did,
      userData: {
        githubToken: 'Hejhej',
        twitterToken: 'twitterTokn',
      },
    });
  };

  const { data, signMessage, signMessageAsync } = useSignMessage({
    message: msg,
    onError: (err) => {
      console.log('ERRR:: useSignMessage', err);
    },
    onSuccess: (sig) => {
      uploadData(sig);
    },
  });

  const session = useSession();

  const gogo = async () => {
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

  return <button onClick={() => gogo()}>Create signing</button>;
};

export default CreateSigning;
