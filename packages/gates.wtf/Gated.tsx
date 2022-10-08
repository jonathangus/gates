import { FC, PropsWithChildren } from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import axios from 'axios';
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import {
  WagmiConfig,
  createClient,
  configureChains,
  defaultChains,
  useAccount,
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
]);

const { connectors } = getDefaultWallets({
  appName: '...',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const GatedInner = ({ children, gateId }) => {
  const { address, isConnected } = useAccount();
  const query = useQuery(
    ['gated.wtf', gateId, address],
    async () => {
      const { data } = await axios.get(
        `http://localhost:3000/api/verify?address=${address}&gateId=${gateId}`
      );

      return data;
    },
    {
      enabled: Boolean(address),
    }
  );

  if (query.error) {
    return <div>Error: {query.error.message}</div>;
  }

  console.log(query);
  if (!isConnected) {
    return <ConnectButton />;
  }

  console.log(address);

  return <ConnectButton />;
  return children;
};

export type GatedProps = {
  gateId: string;
};

const queryClient = new QueryClient();

export const Gated = ({ gateId, children }: PropsWithChildren<GatedProps>) => {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <GatedInner gateId={gateId}>{children}</GatedInner>;
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  );
};
