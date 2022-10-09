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
      description:
        'Modernipsum dolor sit amet art nouveau avant-garde precisionism performance art superstroke avant-garde, video game art historicism.',
      fields: [
        {
          type: 'string',
          name: 'repoPath',
          title: 'Path to repo',
        },
      ],
      method: repoAccess,
    },
  ],
};
