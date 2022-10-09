// import { DIDSession } from 'did-session';
// import type { AuthMethod } from '@didtools/cacao';
// import { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum';
// import { compose } from '../utils/compose';
// import { EthereumAuthProvider } from '@ceramicnetwork/blockchain-utils-linking';
// import { useAccount } from 'wagmi';

// const useSession = async (authMethod: AuthMethod): Promise<DIDSession> => {
//   const { address } = useAccount();
//   const authProvider = new EthereumAuthProvider(window.ethereum, address);
//   const session = await DIDSession.authorize(authProvider, {
//     resources: compose.resources,
//   });

//   const sessionStr = localStorage.getItem('didsession');
//   let session;

//   if (sessionStr) {
//     session = await DIDSession.fromSession(sessionStr);
//   }

//   if (!session || (session.hasSession && session.isExpired)) {
//     session = await DIDSession.authorize(authMethod, {
//       resources: compose.resources,
//     });
//     localStorage.setItem('didsession', session.serialize());
//   }

//   return session;
// };

// const session = await loadSession(authMethod);
// const ceramic = new CeramicClient();
// ceramic.did = session.did;

// // pass ceramic instance where needed, ie ceramic, composedb, glaze
// // ...

// // before ceramic writes, check if session is still valid, if expired, create new
// if (session.isExpired) {
//   const session = loadSession(authMethod);
//   ceramic.did = session.did;
// }
