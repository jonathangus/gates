import { useNetwork, useSwitchNetwork } from 'wagmi';

import { config } from '../config/config';

const useCorrectChain = (): {
  isSupported: boolean;
  loading: boolean;
  currentChainId: number;
  switchToValidChain: () => void;
} => {
  const { isLoading, switchNetwork } = useSwitchNetwork({
    chainId: config.fallbackId,
  });
  const { chain: activeChain } = useNetwork();

  let currentChainId = config.fallbackId;

  if (config.defaultChains.map((chain) => chain.id).includes(activeChain?.id)) {
    currentChainId = activeChain.id;
  }

  return {
    isSupported: !activeChain?.unsupported,
    loading: isLoading,
    currentChainId: currentChainId,
    switchToValidChain: () => {
      switchNetwork(config.fallbackId);
    },
  };
};

export default useCorrectChain;
