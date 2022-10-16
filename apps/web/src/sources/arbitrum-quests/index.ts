import { Source } from '../../types';
import { checkOdyssey } from './commands';

export const source: Source = {
  id: 'arbiquest',
  metadata: {
    logo: 'https://pbs.twimg.com/profile_images/1490751860461953029/046qIxwT_400x400.jpg',
  },
  conditions: [
    {
      name: 'Enter The Odyssey',
      key: 'ddyssey',
      description: 'If you hold a Enter The Odyssey nft from galxe.com.',
      fields: [
        {
          type: 'boolean',
          name: 'use',
          title: 'Enable',
        },
      ],
      method: checkOdyssey,
    },
  ],
};
