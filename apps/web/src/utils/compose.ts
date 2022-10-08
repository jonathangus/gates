import { ComposeClient } from '@composedb/client';

// import { definition } from 'ceramic/__generated__/definition';

const definition: any = {
  models: {
    PersonalInfo: {
      id: 'kjzl6hvfrbw6c5got7madx4k88ldehpsdngxqg8e4ti31iff550fuh65eccnivp',
      accountRelation: { type: 'single' },
    },
  },
  objects: {
    PersonalInfo: {
      githubId: { type: 'string', required: false },
      walletAddress: { type: 'string', required: true },
    },
  },
  enums: {},
  accountData: { personalInfo: { type: 'node', name: 'PersonalInfo' } },
};
export const compose = new ComposeClient({
  ceramic: 'http://0.0.0.0:7007',
  definition,
});
