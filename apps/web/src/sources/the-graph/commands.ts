import { CommandContext } from '../../types';
import { request } from 'graphql-request';
import get from 'lodash/get';

export const queryTheGraph = async (
  {
    endpoint,
    selector,
    result,
    query,
  }: { endpoint: string; selector: string; result: string; query: string },
  ctx: CommandContext
): Promise<boolean> => {
  try {
    const data = await request(endpoint, query);

    return get(data, selector) == result;
  } catch (e) {
    return false;
  }
};

export const minENSs = async (
  { minNumber }: { minNumber: number },
  ctx: CommandContext
): Promise<boolean> => {
  try {
    const data = await request(
      'https://api.thegraph.com/subgraphs/name/ensdomains/ens/graphql',
      `
      {
  domains(where: {id: ${ctx.wallet}) {
    id
    name
    labelName
    labelhash
  }
}
      `
    );
    return data.length >= minENSs;
  } catch (e) {
    return false;
  }
};
