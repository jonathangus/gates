import { CommandContext } from '../../types';
import { ethers } from 'ethers';
import { ENDPOINTS } from '../../utils/endpoints';

export const ownsNFT = async (
  args: { contractAddress: string },
  ctx: CommandContext
): Promise<boolean> => {
  const provider = new ethers.providers.JsonRpcProvider(
    ENDPOINTS.QUICKNODE_MAINNET
  );

  const nfts = await provider.send('qn_fetchNFTs', {
    wallet: ctx.wallet,
    omitFields: ['provenance', 'traits'],
    page: 1,
    perPage: 10,
    contracts: [args.contractAddress],
  });

  return nfts.assets.length >= 1;
};

export const hasMinTokenBalance = async (
  args: { contractAddress: string; minAmount: number },
  ctx: CommandContext
): Promise<boolean> => {
  const provider = new ethers.providers.JsonRpcProvider(
    ENDPOINTS.QUICKNODE_MAINNET
  );

  console.log({
    wallet: ctx.wallet,
    contracts: [args.contractAddress],
  });
  const tokens = await provider.send('qn_getWalletTokenBalance', {
    wallet: ctx.wallet,
    contracts: [args.contractAddress],
  });
  if (tokens.assets.length == 0) {
    return false;
  }
  return tokens.assets[0].amount > args.minAmount;
};
