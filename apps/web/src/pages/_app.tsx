import type { AppProps } from 'next/app';
import React from 'react';
import Web3Provider from '../components/Web3Provider';
import { NotificationsProvider } from 'reapop';
import NotificationHandler from '../components/NotificationHandler';
import { SessionProvider } from 'next-auth/react';

import SEO from '../components/SEO';
import { usePanelbear } from '@panelbear/panelbear-nextjs';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  usePanelbear('FqeHQCLEy3v');

  return (
    <NotificationsProvider>
      <SessionProvider session={session}>
        <Web3Provider>
          <SEO />
          <Component {...pageProps} />
          <NotificationHandler />
        </Web3Provider>
      </SessionProvider>
    </NotificationsProvider>
  );
}

export default MyApp;
