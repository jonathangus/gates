import { Source } from '../../types';
import { minENSs, queryTheGraph } from './commands';

export const source: Source = {
  id: 'the-graph',
  metadata: {
    logo: 'https://cryptologos.cc/logos/the-graph-grt-logo.png?v=023',
  },
  conditions: [
    {
      name: 'The Graph query',
      key: 'query',
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
          name: 'query',
          title: 'Query',
        },
        {
          type: 'string',
          name: 'selector',
          title: 'GraphQL selector',
        },
        {
          type: 'string',
          name: 'result',
          title: 'Expected response',
        },
      ],
      method: queryTheGraph,
    },
    {
      name: 'ENS holder',
      key: 'minENSs',
      description:
        'User is required to hold the minimum balance of ENS tokens.',
      fields: [
        {
          type: 'int',
          name: 'minNumber',
          title: 'Minimum ENS token balance',
        },
      ],
      method: minENSs,
    },
  ],
};
