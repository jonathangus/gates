import axios from 'axios';
import { CommandContext } from '../../types';
import get from 'lodash/get';

export const getRequest = async (
  args: { endpoint: string; selector: string; result: string },
  ctx: CommandContext
): Promise<boolean> => {
  try {
    const { endpoint, selector, result } = args;
    const { data } = await axios.get(endpoint);
    return get(data, selector) == result;
  } catch (e) {
    return false;
  }
};

export const commands = {
  getRequest,
};
