import type { AppProps } from 'next/app';
import React from 'react';
import Web3Provider from '../components/Web3Provider';
import { NotificationsProvider } from 'reapop';
import NotificationHandler from '../components/NotificationHandler';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <NotificationsProvider>
      <SessionProvider session={session}>
        <Web3Provider>
          <Component {...pageProps} />
          <NotificationHandler />
        </Web3Provider>
      </SessionProvider>
    </NotificationsProvider>
  );
}

export default MyApp;
