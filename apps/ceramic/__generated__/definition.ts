// This is an auto-generated file, do not edit manually
import type { RuntimeCompositeDefinition } from '@composedb/types';
export const definition: RuntimeCompositeDefinition = {
  models: {
    PersonalInfo: {
      id: 'kjzl6hvfrbw6c6ah11yv7793w9ymu0ikr1fgbtg4m2e18hrepvz7tuwqyzh0lwt',
      accountRelation: { type: 'single' },
    },
  },
  objects: {
    PersonalInfo: {
      lensToken: { type: 'string', required: false },
      githubToken: { type: 'string', required: false },
      spotifyToken: { type: 'string', required: false },
      twitterToken: { type: 'string', required: false },
      walletAddress: { type: 'string', required: true },
    },
  },
  enums: {},
  accountData: { personalInfo: { type: 'node', name: 'PersonalInfo' } },
};
