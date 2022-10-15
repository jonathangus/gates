import type { AppProps } from 'next/app';
import React from 'react';
import Web3Provider from '../components/Web3Provider';
import { NotificationsProvider } from 'reapop';
import NotificationHandler from '../components/NotificationHandler';
import { SessionProvider } from 'next-auth/react';

import SEO from '../components/SEO';
import { usePanelbear } from '@panelbear/panelbear-nextjs';
import LivepeerProvider from '../components/LivepeerProvider';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import {
  AppShell,
  Navbar,
  Header,
  Center,
  UnstyledButton,
  Text,
} from '@mantine/core';
import LogoHeader from '../components/Common/LogoHeader';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  usePanelbear('FqeHQCLEy3v');

  return (
    <QueryClientProvider client={queryClient}>
      <LivepeerProvider>
        <NotificationsProvider>
          <SessionProvider session={session}>
            <Web3Provider>
              <SEO />
              <div style={{ height: '100vh', overflow: 'hidden' }}>
                <div style={{ display: 'grid', gap: 20 }}>
                  <AppShell
                    padding="md"
                    header={
                      <Header height={60} p="xs">
                        <LogoHeader />
                      </Header>
                    }
                    styles={(theme) => ({
                      main: {
                        backgroundColor:
                          theme.colorScheme === 'dark'
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                      },
                    })}
                  >
                    <Component {...pageProps} />
                  </AppShell>
                </div>
              </div>
              <NotificationHandler />
            </Web3Provider>
          </SessionProvider>
        </NotificationsProvider>
      </LivepeerProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
