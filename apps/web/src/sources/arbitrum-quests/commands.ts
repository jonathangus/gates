import axios from 'axios';
import { CommandContext } from '../../types';
import get from 'lodash/get';
import { ENDPOINTS } from '../../utils/endpoints';
import { ethers } from 'ethers';

export const checkOdyssey = async (
  args: { use: string },
  ctx: CommandContext
): Promise<boolean> => {
  const provider = new ethers.providers.JsonRpcProvider(
    `https://arb.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`
  );

  return true;
  const nfts = await provider.send('qn_fetchNFTs', {
    wallet: ctx.wallet,
    omitFields: ['provenance', 'traits'],
    page: 1,
    perPage: 10,
    contracts: ['0xfAe39eC09730CA0F14262A636D2d7C5539353752'],
  });

  return nfts.assets.length >= 1;
};

export const commands = {
  checkOdyssey,
};
