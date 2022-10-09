import { CommandContext } from '../../types';
import axios from 'axios';
import get from 'lodash/get';

export const repoAccess = async (
  { repoPath }: { repoPath: string },
  ctx: CommandContext
): Promise<boolean> => {
  console.log('github', ctx.userData);
  const { data } = await axios.get('https://api.github.com/user/repos', {
    headers: {
      Authorization: 'token ' + ctx.userData.githubToken,
    },
  });
  for (const repo of data) {
    console.log(repo);
    if (repo['full_name'] === repoPath) {
      return true;
    }
  }
  return false;
};
