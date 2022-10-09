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
          name: 'endpoint', // https://api.thegraph.com/subgraphs/name/ensdomains/ens
          title: 'Endpoint',
        },
        {
          type: 'string',
          name: 'query',
          title: 'Query',
        },
        {
          type: 'string',
          name: 'selector', // data.domain.name
          title: 'GraphQL selector',
        },
        {
          type: 'string',
          name: 'result', // jont.eth
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
          name: 'Minimum ENS token balance',
        },
      ],
      method: minENSs,
    },
  ],
};

/*
{
  domain(id:"0x5fd41c0b70d42da6abd27640b5f5a22964f019d30e9eefc4a06be3c460d50c34") {
    id
    name
    labelName
    labelhash
  } 
}
*/
