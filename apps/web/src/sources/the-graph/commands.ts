import axios from 'axios';
import { CommandContext } from '../../types';

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
    request(endpoint, query);
    console.log({ endpoint, selector, result });
    const { data } = axios.get(endpoint);
    return _.get(data, selector) == result;
  } catch (e) {
    return false;
  }

  return Promise.resolve(true);
};

export const commands = {
  getRequest,
};
