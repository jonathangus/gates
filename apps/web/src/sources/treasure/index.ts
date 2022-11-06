import { Source } from '../../types';
import { checkUserStakedAssets } from './commands';

export const source: Source = {
  id: 'treasure',
  metadata: {
    logo: 'https://treasure.lol/build/_assets/logomark-4YQVSTPG.png',
  },
  conditions: [
    {
      name: 'Treasure Staking',
      key: 'treasure.staking',
      description:
        'Check the users owned assets across Smolverse`s staking contracts',
      fields: [
        {
          type: 'boolean',
          name: 'school',
          title: 'Smol School',
        },
        {
          type: 'boolean',
          name: 'racing',
          title: 'Smol Racing',
        },
        {
          type: 'boolean',
          name: 'gym',
          title: 'Swol Gym',
        },
      ],
      method: checkUserStakedAssets,
    },
  ],
};
