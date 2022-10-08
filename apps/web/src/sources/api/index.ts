import { Source } from '../../types';
import { getRequest } from './commands';

export const source: Source = {
  id: 'api',
  metadata: {
    logo: '...',
  },
  conditions: [
    {
      name: 'Api GET request',
      key: 'api.get',
      fields: [
        {
          type: 'string',
          name: 'endpoint',
        },
        {
          type: 'string',
          name: 'selector',
          description: 'ex: data.model.name',
        },
        {
          type: 'string',
          name: 'result',
          description: 'vitalik',
        },
      ],
      method: getRequest,
    },
  ],
};
