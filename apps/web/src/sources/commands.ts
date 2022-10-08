import { commands as twitterCommands } from './twitter/commands';
import { fields as twitterFields } from './twitter/fields';
import { commands as apiCommands } from './api/commands';
import { fields as apiFields } from './api/fields';

export const commands = {
  [twitterFields.id]: {
    [twitterFields.conditions['twitter.follow'].key]:
      twitterCommands.userFollow,
    [twitterFields.conditions['twitter.retweet'].key]:
      twitterCommands.userRetweet,
  },
  [apiFields.id]: {
    [apiFields.conditions['api.get'].key]: apiCommands.getRequest,
  },
};
