import { source as twitterSource } from './twitter';
import { source as apiSource } from './api';
import { source as theGraphSource } from './the-graph';
import { source as quickNodeSource } from './quicknode';
import { source as githubSource } from './github';

export const sources = {
  [quickNodeSource.id]: quickNodeSource,
  [githubSource.id]: githubSource,
  [twitterSource.id]: twitterSource,
  [apiSource.id]: apiSource,
  [theGraphSource.id]: theGraphSource,
  [quickNodeSource.id]: quickNodeSource,
  [githubSource.id]: githubSource,
};
