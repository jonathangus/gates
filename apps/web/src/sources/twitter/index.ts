import { Source } from '../../types';
import { userFollow, userRetweet } from './commands';

export const source: Source = {
  id: 'twitter',
  metadata: {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RD1GgYc_KBe2JmbS3Nru9wp3lyG-nnVEacPoE272&s',
  },
  conditions: [
    {
      name: 'User need to follow account',
      key: 'twitter.follow',
      fields: [
        {
          type: 'string',
          name: 'account',
        },
      ],
      method: userFollow,
    },
    {
      name: 'User need to retweet post',
      key: 'twitter.retweet',
      fields: [
        {
          type: 'string',
          name: 'postId',
        },
      ],
      method: userRetweet,
    },
  ],
};
