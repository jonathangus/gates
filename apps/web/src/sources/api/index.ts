import { Source } from '../../types';
import { getRequest } from './commands';

export const source: Source = {
  id: 'api',
  metadata: {
    logo: 'https://cdn.usetopscore.com/uploads/987/media_items/api-picture.512.284.s.png',
  },
  conditions: [
    {
      name: 'Api GET request',
      key: 'get',
      description:
        'Modernipsum dolor sit amet art nouveau avant-garde precisionism performance art superstroke avant-garde, video game art historicism.',
      fields: [
        {
          type: 'string',
          name: 'endpoint',
          title: '',
        },
        {
          type: 'string',
          name: 'selector',
          description: 'ex: data.model.name',
          title: '',
        },
        {
          type: 'string',
          name: 'result',
          description: 'vitalik',
          title: '',
        },
      ],
      method: getRequest,
    },
  ],
};
