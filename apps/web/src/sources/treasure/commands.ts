import { CommandContext } from '../../types';
import { gql, request } from 'graphql-request';

export const checkUserStakedAssets = async (
  ctx: CommandContext
): Promise<boolean> => {
  try {
    const data = await request(
      'https://api.thegraph.com/subgraphs/name/treasureproject/smolverse',
      gql`
        query GetStakedNFTs($wallet: ID!) {
          users(id: $wallet) {
            stakedTokens {
              id
            }
          }
        }
      `,
      {
        wallet: ctx.wallet.toLowerCase(),
      }
    );
    console.log({ data });
    return data;
  } catch (e) {
    console.error('Smolverse staking', e);
    return false;
  }
};
