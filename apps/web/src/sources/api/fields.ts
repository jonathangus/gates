import { Fields } from '../../types';

export const fields: Fields = {
  id: 'api',
  metadata: {
    logo: '...',
  },
  conditions: {
    ['api.get']: {
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
    },
  },
};
