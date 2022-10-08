import type { AppProps } from 'next/app';
import React from 'react';
import Web3Provider from '../components/Web3Provider';
import { NotificationsProvider } from 'reapop';
import NotificationHandler from '../components/NotificationHandler';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotificationsProvider>
      <Web3Provider>
        <Component {...pageProps} />
        <NotificationHandler />
      </Web3Provider>
    </NotificationsProvider>
  );
}

export default MyApp;
