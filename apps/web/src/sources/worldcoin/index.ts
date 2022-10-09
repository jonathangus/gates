import { Source } from '../../types';
import { verifyJWT } from './commands';

export const source: Source = {
  id: 'worldcoin',
  metadata: {
    logo: 'https://play-lh.googleusercontent.com/dOQIvOnM4Hbk6p3_4P9yUi28yiaA1obSByOenvfZ_eMrFT2R0JZYPJujuyoui-D072JH=w480-h960',
  },
  conditions: [
    {
      name: 'Verify JWT',
      key: 'verify',
      description: 'Verify worldcoin JWT from Ceramic context.',
      fields: [],
      method: verifyJWT,
    },
  ],
};
