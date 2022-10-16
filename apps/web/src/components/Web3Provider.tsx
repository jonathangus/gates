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

const { chains, provider } = configureChains(
  [chain.arbitrumGoerli, chain.goerli],
  [
    // jsonRpcProvider({
    //   rpc: () => ({
    //     http: 'https://rough-neat-crater.arbitrum-goerli.discover.quiknode.pro/73721a90cdd5340c3d3622b93bb42d7d522f159b/',
    //   }),
    // }),
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  chains,
  appName: 'ArbiGates',
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
          resolveAddress={(contractName, chainId) => {
            return getAddress(chainId, contractName as AvailableContracts);
          }}
          fallbackChain={config.fallbackId}
        >
          {children}
        </LFGProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Web3Provider;
