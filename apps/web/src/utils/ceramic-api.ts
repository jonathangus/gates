import { gql } from 'graphql-request';
import { UserData } from '../types';
import { compose } from './compose';
import { DIDSession } from 'did-session';
import { decryptWithAES, encryptWithAES } from './encryption';

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
            githubToken
          }
        }
      }
    `,
    {
      content: { walletAddress: wallet, ...result },
    }
  );

  console.log('response mutation', JSON.stringify(res));
};

export const readPersonalData = async (wallet: string) => {
  const { data, errors } = await compose.executeQuery<any>(
    gql`
      {
        personalInfoIndex(first: 1000) {
          edges {
            node {
              walletAddress
              githubToken
              twitterToken
            }
          }
        }
      }
    `
  );

  if (errors) {
    console.log('Error ', JSON.stringify(errors));
  } else {
    console.log(
      'personalInfoIndex Entries: ',
      data.personalInfoIndex.edges.length
    );
    // console.log('Data', JSON.stringify(data));
  }

  const match = data.personalInfoIndex.edges.find(
    (edge) => edge.node.walletAddress.toLowerCase() === wallet.toLowerCase()
  );

  if (!match) {
    throw new Error('Address needs to sign on gates.wtf');
  }
  const content = match.node;
  const { walletAddress, ...rest } = content;
  const result = {};

  Object.entries(rest).forEach(([key, value]) => {
    result[key] = decryptWithAES(value as string);
  });

  return result;
};
