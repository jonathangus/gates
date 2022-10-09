import { Source } from '../../types';

export const source: Source = {
  id: 'spotify',
  metadata: {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/2048px-Spotify_App_Logo.svg.png',
  },
  conditions: [
    {
      name: 'User have song as its top 100 played',
      key: 'song',
      disabled: true,
      fields: [
        {
          type: 'string',
          name: 'song',
          title: 'Song Name',
        },
        {
          type: 'string',
          name: 'artist',
          title: 'Artist',
        },
      ],
      method: async () => false,
    },
  ],
};
