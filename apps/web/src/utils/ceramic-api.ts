import { request, gql } from 'graphql-request';
import { UserData } from '../types';
import { encryptWithAES } from './encryption';

const ceramicEndpoint = 'http://localhost:5001/graphql';

export const savePersonalInfo = async (data: UserData, signature: string) => {
  const { wallet, ...rest } = data;

  const result = {};
  Object.entries(rest).forEach(([key, value]) => {
    result[key] = encryptWithAES(value, signature);
  });

  const query = gql`
    mutation ($content: PersonalInfoInput!) {
      createPersonalInfo(input: { content: $content }) {
        document {
          walletAddress
        }
      }
    }
  `;

  console.log('SAVE:!');
  const res = await request(ceramicEndpoint, query, {
    content: { walletAddress: wallet, ...result },
  });
};

export const readPersonalData = async (wallet: string) => {
  const query = gql`
    query ($walletAddress: String!) {
      personalInfo(input: { walletAddress: $walletAddress }) {
        document {
          walletAddress
          githubId
        }
      }
    }
  `;

  console.log('SAVE:!');
  const { data } = await request(ceramicEndpoint, query, {
    content: { walletAddress: wallet },
  });

  const { walletAddress, ...rest } = data;
  const result = {};
  Object.entries(rest).forEach(([key, value]) => {
    result[key] = encryptWithAES(value, signature);
  });
};
