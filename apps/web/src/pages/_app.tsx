import type { AppProps } from 'next/app';
import React from 'react';
import Web3Provider from '../components/Web3Provider';
import { NotificationsProvider } from 'reapop';
import NotificationHandler from '../components/NotificationHandler';
import { SessionProvider } from 'next-auth/react';

import SEO from '../components/SEO';
import { usePanelbear } from '@panelbear/panelbear-nextjs';
import LivepeerProvider from '../components/LivepeerProvider';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  usePanelbear('FqeHQCLEy3v');

  return (
    <LivepeerProvider>
      <NotificationsProvider>
        <SessionProvider session={session}>
          <Web3Provider>
            <SEO />
            <Component {...pageProps} />
            <NotificationHandler />
          </Web3Provider>
        </SessionProvider>
      </NotificationsProvider>
    </LivepeerProvider>
  );
}

export default MyApp;
