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

  const fakeWallet = '0x5FA57d882D55CFcCF91f1C375EC4a89b118d85DA'; // use ctx.wallet when it's implemented
  const nfts = await provider.send('qn_fetchNFTs', {
    wallet: fakeWallet,
    omitFields: ['provenance', 'traits'],
    page: 1,
    perPage: 10,
    contracts: [args.contractAddress],
  });
  return nfts.assets.length > 1;
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
  const fakeWallet = '0x7fE9F445d18D8CE55fbC08BB0EE98E69094D0d69'; // use ctx.wallet when it's implemented
  const tokens = await provider.send('qn_getWalletTokenBalance', {
    wallet: fakeWallet,
    contracts: [args.contractAddress],
  });
  if (tokens.assets.length == 0) {
    return false;
  }
  return tokens.assets[0].amount > 1000000000000000000; //args.minAmount;
};
