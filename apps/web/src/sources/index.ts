import { source as twitterSource } from './twitter';
import { source as apiSource } from './api';

export const sources = {
  [twitterSource.id]: twitterSource,
  [apiSource.id]: apiSource,
};
