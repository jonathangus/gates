import type { AppProps } from 'next/app';
import React from 'react';
import Web3Provider from '../components/Web3Provider';
import { NotificationsProvider } from 'reapop';
import NotificationHandler from '../components/NotificationHandler';
import { SessionProvider } from 'next-auth/react';

<<<<<<< HEAD
function MyApp({ Component, pageProps }: AppProps) {
  return null;
=======
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
>>>>>>> bbaebd593fa69ddb70267841153f1cb850d5cf4b
}

export default MyApp;
