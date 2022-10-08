import { ComposeClient } from '@composedb/client';

import { definition } from 'ceramic';

export const compose = new ComposeClient({
  ceramic: 'http://0.0.0.0:7007',
  definition,
});
