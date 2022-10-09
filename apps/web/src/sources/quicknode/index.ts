import { Source } from '../../types';
import { ownsNFT, hasMinTokenBalance } from './commands';

export const source: Source = {
  id: 'quicknode',
  metadata: {
    logo: 'https://pbs.twimg.com/profile_images/1542907089864966144/V0dAj1oO_400x400.png',
  },
  conditions: [
    {
      name: 'Ethereum NFT owner (ERC-721)',
      key: 'ownsNFT',
      description:
        'User is required to hold minimum one NFT of a specified collection.',

      fields: [
        {
          type: 'string',
          name: 'contractAddress',
          title: 'NFT contract address',
        },
      ],
      method: ownsNFT,
    },
    {
      name: 'Ethereum token balance (ERC-20)',
      key: 'hasMinTokenBalance',
      description:
        'User is required to have a minimum balance of a specified token.',

      fields: [
        {
          type: 'string',
          name: 'contractAddress',
          title: 'Token contract address',
        },
        {
          type: 'int',
          name: 'minAmount',
          title: 'Minimum balance',
        },
      ],
      method: hasMinTokenBalance,
    },
  ],
};
