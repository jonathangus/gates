import { Source } from '../../types';
import { getRequest } from './commands';

export const source: Source = {
  id: 'api',
  metadata: {
    logo: 'https://cdn.usetopscore.com/uploads/987/media_items/api-picture.512.284.s.png',
  },
  conditions: [
    {
      name: 'API call',
      key: 'get',
      description:
        'Retrieved response from the triggered endpoint matches the inputted result.',
      fields: [
        {
          type: 'string',
          name: 'endpoint',
          title: 'Endpoint',
        },
        {
          type: 'string',
          name: 'selector',
          title: 'JSON selector',
        },
        {
          type: 'string',
          name: 'result',
          title: 'Expected response',
        },
      ],
      method: getRequest,
    },
  ],
};
