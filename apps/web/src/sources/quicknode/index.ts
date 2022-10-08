import { Source } from '../../types';
import { ownsNFT, hasMinTokenBalance } from './commands';

export const source: Source = {
  id: 'quicknode',
  metadata: {
    logo: 'https://www.quicknode.com/assets/marketing/logos/qn-logo-08668a0d355da30858584c73c0b2bccd3021c428438f784871eb02ca1c908a19.svg',
  },
  conditions: [
    {
      name: 'Owns an NFT part of a collection',
      key: 'ownsNFT',
      fields: [
        {
          type: 'string',
          name: 'contractAddress',
        },
      ],
      method: ownsNFT,
    },
    {
      name: 'Has at least a certain amount of a given token',
      key: 'hasMinTokenBalance',
      fields: [
        {
          type: 'string',
          name: 'contractAddress',
        },
        {
          type: 'int',
          name: 'minAmount'
        }
      ],
      method: hasMinTokenBalance,
    }
  ],
};
