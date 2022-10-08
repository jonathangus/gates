import { source as twitterSource } from './twitter';
import { source as apiSource } from './api';
import { source as theGraphSource } from './the-graph';

export const sources = {
  [twitterSource.id]: twitterSource,
  [apiSource.id]: apiSource,
  [theGraphSource.id]: theGraphSource,
};
