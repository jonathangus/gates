import { Source } from '../../types';
import { userFollow, userRetweet } from './commands';

export const source: Source = {
  id: 'twitter',
  metadata: {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RD1GgYc_KBe2JmbS3Nru9wp3lyG-nnVEacPoE272&s',
  },
  conditions: [
    {
      name: 'Twitter follow',
      key: 'twitter.follow',
      description: 'User is required to follow the specified handle.',
      fields: [
        {
          type: 'string',
          name: 'account',
          title: 'Twitter handle',
        },
      ],
      method: userFollow,
    },
    {
      name: 'Twitter retweet',
      key: 'twitter.retweet',
      description: 'User is required to retweet the specified tweet.',
      fields: [
        {
          type: 'string',
          name: 'postId',
          title: 'Post identifier',
        },
      ],
      method: userRetweet,
    },
  ],
};
