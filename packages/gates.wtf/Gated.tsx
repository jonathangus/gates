import { useState, PropsWithChildren, useEffect } from 'react';
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
  useAccount,
  allChains,
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(allChains, [publicProvider()]);

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
  const [mounted, setMounted] = useState(false);

  const { address, isConnected } = useAccount();
  const query = useQuery<any, any, any, any>(
    ['gated.wtf', gateId, address],
    async () => {
      const { data } = await axios.get(
        `https://gates.wtf/api/verify?address=${address}&gateId=${gateId}`
      );

      return data;
    },
    {
      enabled: Boolean(address),
    }
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return;
  }

  if (query.error) {
    return (
      <div>
        Error: {query.error.message}. Most likely {address} have not signed on
        gates.wtf
      </div>
    );
  }

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  if (!isConnected) {
    return <ConnectButton />;
  }

  if (query.data && !query.data.success) {
    return (
      <div>
        <h2>You have no access to gateId {gateId} :(</h2>
      </div>
    );
  }

  if (query.data && query.data.success) {
    return <>{children}</>;
  }

  return null;
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
          <GatedInner gateId={gateId}>{children}</GatedInner>
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  );
};
