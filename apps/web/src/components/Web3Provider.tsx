import '@rainbow-me/rainbowkit/styles.css';

import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';
import { config } from '../config/config';
import { LFGProvider } from 'wagmi-lfg';
import useNotice from '../hooks/useNotice';
import { AvailableContracts, getAddress } from 'web3-config';
import { Status } from 'reapop';

const { chains, provider } = configureChains(config.defaultChains, [
  alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY }),
  infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_KEY }),
  publicProvider(),
]);

const { connectors } = getDefaultWallets({
  chains,
  appName: 'WIP',
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const Web3Provider = ({ children }) => {
  const notice = useNotice();

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme({})}>
        <LFGProvider
          notice={({ status, message }) =>
            notice({ status: status as Status, message })
          }
          resolveAddress={(contractName, chainId) =>
            getAddress(chainId, contractName as AvailableContracts)
          }
          fallbackChain={config.fallbackId}
        >
          {children}
        </LFGProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Web3Provider;
