import { CommandContext } from '../../types';
import { gql, request } from 'graphql-request';

export const checkUserStakedAssets = async (
  {
    school,
    racing,
    gym,
  }: {
    school: 'true' | 'false';
    racing: 'true' | 'false';
    gym: 'true' | 'false';
  },
  ctx: CommandContext
): Promise<boolean> => {
  try {
    const data = await request(
      'https://api.thegraph.com/subgraphs/name/treasureproject/smolverse',
      gql`
        query GetStakedNFTs($wallet: ID!) {
          user(id: $wallet) {
            stakedTokens {
              id
            }
          }
        }
      `,
      {
        wallet: '0x001aede476495f4732b8273f554ba1f858a439c8',
      }
    );
    const stakedTokens = data.user.stakedTokens;
    if (stakedTokens.length === 0) {
      console.log('No staked tokens');
      return false;
    }
    let hasMatch = true;
    if (school === 'true') {
      const hasStakedSchool = stakedTokens.some((token) =>
        token.id.includes('school')
      );
      hasMatch = hasMatch && hasStakedSchool;
    }
    if (gym === 'true') {
      const hasStakedGym = stakedTokens.some((token) =>
        token.id.includes('gym')
      );
      hasMatch = hasMatch && hasStakedGym;
    }

    if (racing == 'true') {
      const hasStakedRacing = stakedTokens.some((token) =>
        token.id.includes('racing')
      );
      hasMatch = hasMatch && hasStakedRacing;
    }

    return hasMatch;
  } catch (e) {
    console.error('Smolverse staking', e);
    return false;
  }
};
