import { gql } from 'graphql-request';
import { UserData } from '../types';
import { compose } from './compose';
import { decryptWithAES, encryptWithAES } from './encryption';
import { DIDSession } from 'did-session';
import { DID } from 'dids';
import * as PKHDiDresolver from 'pkh-did-resolver';
import { Ed25519Provider } from 'key-did-provider-ed25519';
import { getResolver } from 'key-did-resolver';
import { fromString } from 'uint8arrays/from-string';
import { Resolver } from 'did-resolver';

export const savePersonalInfo = async (
  wallet: string,
  data: UserData,
  did: string
) => {
  const session = await DIDSession.fromSession(did);
  compose.setDID(session.did);

  const result = {};
  Object.entries(data).forEach(([key, value]) => {
    result[key] = encryptWithAES(value);
  });

  const res = await compose.executeQuery(
    gql`
      mutation ($content: PersonalInfoInput!) {
        createPersonalInfo(input: { content: $content }) {
          document {
            walletAddress
            id
          }
        }
      }
    `,
    {
      content: { walletAddress: wallet, ...result },
    }
  );

  console.log(JSON.stringify(res));
};

export const readPersonalData = async (wallet: string) => {
  const privateKey = fromString(
    'b71f9960231e9484ed1657d1267b9906eef63d2bc6004c32905475ffb8464921',
    'hex'
  );

  const resolver = new Resolver({ ...PKHDiDresolver.getResolver() });
  const did = await resolver.resolve(`did:pkh:eip155:420:${wallet}`);

  console.log({ did });
  compose.setDID(did);

  console.log('SETTING DID::::');

  const { data } = await compose.executeQuery<any>(
    gql`
      {
        personalInfoIndex(first: 1, last: 1000) {
          edges {
            node {
              walletAddress
              githubId
            }
          }
        }
      }
    `
  );

  console.log(JSON.stringify(data));
  const match = data.personalInfoIndex.edges.find(
    (edge) => edge.node.walletAddress.toLowerCase() === wallet.toLowerCase()
  );

  if (!match) {
    throw new Error('Address needs to sign on gates.wtf');
  }
  const content = match.node;

  const { walletAddress, ...rest } = content;
  const result = {};

  console.log('CONTENT', content);
  Object.entries(rest).forEach(([key, value]) => {
    result[key] = decryptWithAES(value as string);
  });

  return result;
};
