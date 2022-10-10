import { CommandContext } from '../../types';
import { gql, request } from 'graphql-request';
import get from 'lodash/get';

export const queryTheGraph = async (
  {
    endpoint,
    result,
    selector,
    query,
  }: { endpoint: string; selector: string; result: string; query: string },
  ctx: CommandContext
): Promise<boolean> => {
  try {
    const data = await request(endpoint, query);
    return get(data, selector) == result;
  } catch (e) {
    console.error('queryTheGraph', e);
    return false;
  }
};

export const minENSs = async (
  { minNumber }: { minNumber: number },
  ctx: CommandContext
): Promise<boolean> => {
  try {
    const data = await request(
      'https://api.thegraph.com/subgraphs/name/ensdomains/ens',
      gql`
        query GetAccount($wallet: ID!) {
          account(id: $wallet) {
            registrations {
              id
              labelName
            }
          }
        }
      `,
      {
        wallet: ctx.wallet.toLowerCase(),
      }
    );

    return data.account.registrations.length >= Number(minNumber);
  } catch (e) {
    console.error('minENSs', e);
    return false;
  }
};
