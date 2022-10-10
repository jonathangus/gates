import { Source } from '../../types';
import { repoAccess } from './commands';

export const source: Source = {
  id: 'github',
  metadata: {
    logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  },
  conditions: [
    {
      name: 'GitHub repository access',
      key: 'repoAccess',
      description: 'User is required to have the specified repository access.',
      disabled: true,
      fields: [
        {
          type: 'string',
          name: 'repoPath',
          title: 'Repository path',
        },
      ],
      method: repoAccess,
    },
  ],
};
