import { Source } from '../../types';
import { queryTheGraph } from './commands';

export const source: Source = {
  id: 'the-graph',
  metadata: {
    logo: '...',
  },
  conditions: [
    {
      name: 'Query on the graph',
      key: 'query',
      fields: [
        {
          type: 'string',
          name: 'endpoint', // https://api.thegraph.com/subgraphs/name/ensdomains/ens
        },
        {
          type: 'string',
          name: 'query',
        },
        {
          type: 'string',
          name: 'selector', // data.domain.name
        },
        {
          type: 'string',
          name: 'result', // jont.eth
        },
      ],
      method: queryTheGraph,
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
