import { source as twitterSource } from './twitter';
import { source as apiSource } from './api';
import { source as theGraphSource } from './the-graph';
import { source as quickNodeSource } from './quicknode';
import { source as githubSource } from './github';
import { source as poapSource } from './poap';
import { source as worldcoinSource } from './worldcoin';
import { source as spotifySource } from './spotify';
import { source as treasureSource } from './treasure';

export const sources = {
  [quickNodeSource.id]: quickNodeSource,
  [githubSource.id]: githubSource,
  [poapSource.id]: poapSource,
  [theGraphSource.id]: theGraphSource,
  [worldcoinSource.id]: worldcoinSource,
  [twitterSource.id]: twitterSource,
  [apiSource.id]: apiSource,
  [spotifySource.id]: spotifySource,
  [githubSource.id]: githubSource,
  [treasureSource.id]: treasureSource,
};
