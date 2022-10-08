import { Source } from '../../types';
import { ownsNFT, hasMinTokenBalance } from './commands';

export const source: Source = {
  id: 'quicknode',
  metadata: {
    logo: 'https://pbs.twimg.com/profile_images/1542907089864966144/V0dAj1oO_400x400.png',
  },
  conditions: [
    {
      name: 'Owns an NFT part of a collection',
      key: 'ownsNFT',
      description:
        'Modernipsum dolor sit amet art nouveau avant-garde precisionism performance art superstroke avant-garde, video game art historicism.',

      fields: [
        {
          type: 'string',
          name: 'contractAddress',
          title: 'Contract address',
        },
      ],
      method: ownsNFT,
    },
    {
      name: 'Has at least a certain amount of a given token',
      key: 'hasMinTokenBalance',
      description:
        'Modernipsum dolor sit amet art nouveau avant-garde precisionism performance art superstroke avant-garde, video game art historicism.',

      fields: [
        {
          type: 'string',
          name: 'contractAddress',
          title: 'Contract address',
        },
        {
          type: 'int',
          name: 'minAmount',
          title: 'Min amount',
        },
      ],
      method: hasMinTokenBalance,
    },
  ],
};
