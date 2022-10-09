import axios from 'axios';
import { CommandContext } from '../../types';
import get from 'lodash/get';

export const userEvent = async (
  args: { eventId: string },
  ctx: CommandContext
): Promise<boolean> => {
  try {
    const url = `https://api.poap.tech/actions/scan/${ctx.wallet}/${args.eventId}`;
    const { data } = await axios.get(url, {
      headers: {
        ['X-API-Key']: process.env.POAP_SECRET,
      },
    });

    console.log(data);
    return true;
  } catch (e) {
    return false;
  }
};

export const commands = {
  userEvent,
};
