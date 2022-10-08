import { AvailableContracts, getAddress } from 'web3-config';

import { config } from '../config/config';
import useCorrectChain from './useCorrectChain';

const useAddress = (contract: string | any): string => {
  const { isSupported, currentChainId } = useCorrectChain();
  const contractName =
    typeof contract === 'string' ? contract : new contract().contractName;

  return getAddress(
    isSupported && currentChainId ? currentChainId : config.fallbackId,
    contractName as AvailableContracts
  );
};

export default useAddress;
