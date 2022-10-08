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
      description:
        'Modernipsum dolor sit amet art nouveau avant-garde precisionism performance art superstroke avant-garde, video game art historicism.',
      fields: [
        {
          type: 'string',
          name: 'account',
          title: 'Account name (ex: @ETHGlobal)',
        },
      ],
      method: userFollow,
    },
    {
      name: 'User need to retweet post',
      key: 'twitter.retweet',
      description:
        'Modernipsum dolor sit amet art nouveau avant-garde precisionism performance art superstroke avant-garde, video game art historicism.',
      fields: [
        {
          type: 'string',
          name: 'postId',
          title: 'Post Id (ex: https://twitter.com/ETHGlobal/status/{postId}',
        },
      ],
      method: userRetweet,
    },
  ],
};
