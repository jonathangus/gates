import { Fields } from '../../types';

export const fields: Fields = {
  id: 'twitter',
  metadata: {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RD1GgYc_KBe2JmbS3Nru9wp3lyG-nnVEacPoE272&s',
  },
  conditions: {
    ['twitter.follow']: {
      name: 'User need to follow account',
      key: 'twitter.follow',
      fields: [
        {
          type: 'string',
          name: 'account',
        },
      ],
    },
    ['twitter.retweet']: {
      name: 'User need to retweet post',
      key: 'twitter.retweet',
      fields: [
        {
          type: 'string',
          name: 'postId',
        },
      ],
    },
  },
};
