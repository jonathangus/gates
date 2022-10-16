import { CommandContext } from '../../types';
import { ethers } from 'ethers';

export const checkOdyssey = async (
  args: { use: string },
  ctx: CommandContext
): Promise<boolean> => {
  const provider = new ethers.providers.JsonRpcProvider(
    `https://arb-mainnet.g.alchemy.com/v2/vN4c_KKblME3xS4SU349FNBSwQynuV9Q`
  );
  const contract = new ethers.Contract(
    '0xfae39ec09730ca0f14262a636d2d7c5539353752',
    ['function balanceOf(address owner) external view returns(uint256)'],
    provider
  );

  const balance = await contract.balanceOf(ctx.wallet);

  return balance.gt(0);
};

export const commands = {
  checkOdyssey,
};
