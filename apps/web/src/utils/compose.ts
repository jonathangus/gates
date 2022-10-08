import { ComposeClient } from '@composedb/client';

import { definition } from 'ceramic';

export const compose = new ComposeClient({
  ceramic: 'https://ceramic-private-clay.3boxlabs.com',
  definition,
});
