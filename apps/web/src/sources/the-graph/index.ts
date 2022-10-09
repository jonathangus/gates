import { Source } from '../../types';
import { minENSs, queryTheGraph } from './commands';

export const source: Source = {
  id: 'the-graph',
  metadata: {
    logo: 'https://cryptologos.cc/logos/the-graph-grt-logo.png?v=023',
  },
  conditions: [
    {
      name: 'Query on the graph',
      key: 'query',
      description:
        'Modernipsum dolor sit amet art nouveau avant-garde precisionism performance art superstroke avant-garde, video game art historicism.',
      fields: [
        {
          type: 'string',
          name: 'endpoint', // https://api.thegraph.com/subgraphs/name/ensdomains/ens
          title: '',
        },
        {
          type: 'string',
          name: 'query',
          title: '',
        },
        {
          type: 'string',
          name: 'selector', // data.domain.name
          title: '',
        },
        {
          type: 'string',
          name: 'result', // jont.eth
          title: '',
        },
      ],
      method: queryTheGraph,
    },
    {
      name: 'minENSs',
      key: 'query',
      fields: [
        {
          type: 'int',
          name: 'minNumber',
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
