import { CommandContext } from '../../types';
import axios from 'axios';
import get from 'lodash/get';

export const ownsNFT = async (
  { repoPath }: { repoPath: string },
  ctx: CommandContext
): Promise<boolean> => {
  return false;
};
