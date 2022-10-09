import { Source } from '../../types';
import { userEvent } from './commands';

export const source: Source = {
  id: 'poap',
  metadata: {
    logo: 'https://app.poap.xyz/static/media/POAP.fcb0c058.svg',
  },
  conditions: [
    {
      name: 'User have poap',
      key: 'userEvent',
      description: 'If a user have received a POAP from a specific event.',
      fields: [
        {
          type: 'string',
          name: 'eventId',
          title: 'Event ID',
        },
      ],
      method: userEvent,
    },
  ],
};
