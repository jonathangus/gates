import { Source } from '../../types';
import { repoAccess } from './commands';

export const source: Source = {
  id: 'github',
  metadata: {
    logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  },
  conditions: [
    {
      name: 'User needs to have access to repo',
      key: 'repoAccess',
      fields: [
        {
          type: 'string',
          name: 'repoPath',
        },
      ],
      method: repoAccess,
    },
  ],
};
