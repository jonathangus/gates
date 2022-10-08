import { CommandContext } from '../../types';

export const userFollow = async (
  { user, account }: { user: string; account: string },
  ctx: CommandContext
): Promise<boolean> => {
  return Promise.resolve(true);
};

export const userRetweet = async (
  { user, tweetId }: { user: string; tweetId: string },
  ctx: CommandContext
): Promise<boolean> => {
  return Promise.resolve(true);
};

export const commands = {
  userFollow,
  userRetweet,
};
