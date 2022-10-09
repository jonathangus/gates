import { Source } from '../../types';
import { ownsNFT } from './commands';

export const source: Source = {
  id: 'nftport',
  metadata: {
    logo: 'https://uploads-ssl.webflow.com/624afb2a06eb39e29a68155b/6304c1c9cdd53645f1991489_nftport_logo_300x1500.png',
  },
  conditions: [
    {
      name: 'Owns NFT',
      key: 'ownsNFT',
      fields: [
        {
          type: 'string',
          name: 'contractAddress',
        },
      ],
      method: ownsNFT,
    },
  ],
};
