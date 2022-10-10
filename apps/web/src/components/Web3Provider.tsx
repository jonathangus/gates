import '@rainbow-me/rainbowkit/styles.css';

import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  chainId,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';
import { config } from '../config/config';
import { LFGProvider } from 'wagmi-lfg';
import useNotice from '../hooks/useNotice';
import { AvailableContracts, getAddress } from 'web3-config';
import { Status } from 'reapop';
import { ENDPOINTS } from '../utils/endpoints';
import * as allChains from 'wagmi/chains';

const coinbaseProvider = jsonRpcProvider({
  rpc: (chain) => ({
    http:
      chain == allChains.mainnet
        ? `https://${ENDPOINTS.COINBASE_MAINNET_USERNAME}:${ENDPOINTS.COINBASE_MAINNET_PASSWORD}@${ENDPOINTS.COINBASE_MAINNET_NODE}`
        : chain == allChains.goerli
        ? `https://${ENDPOINTS.COINBASE_GOERLI_USERNAME}:${ENDPOINTS.COINBASE_GOERLI_PASSWORD}@${ENDPOINTS.COINBASE_GOERLI_NODE}`
        : '',
  }),
});

const poktProvider = jsonRpcProvider({
  rpc: (chain) => ({
    http:
      chain == allChains.mainnet
        ? `https://eth-mainnet.gateway.pokt.network/v1/lb/e82b7a00898269c1b047c2e8`
        : chain == allChains.optimism
        ? `https://optimism-mainnet.gateway.pokt.network/v1/lb/e82b7a00898269c1b047c2e8`
        : '',
  }),
});

const { chains, provider } = configureChains(
  [chain.optimismGoerli],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY }),
    coinbaseProvider,
    poktProvider,
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  chains,
  appName: 'Gates',
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
