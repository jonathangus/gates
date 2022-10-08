import axios from 'axios';
import { CommandContext } from '../../types';

export const getRequest = async (
  {
    endpoint,
    selector,
    result,
  }: { endpoint: string; selector: string; result: string },
  ctx: CommandContext
): Promise<boolean> => {
  try {
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
