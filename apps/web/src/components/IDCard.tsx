import { Button, Image, Text, Space } from '@mantine/core';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useEnsName, useAccount, useEnsAvatar } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { formatAddressToShort } from './../utils/formatter';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useUserStore } from '../stores/useUserStore';

const credentials = [
  { name: 'Github', key: 'github2', enabled: true },
  { name: 'Twitter', key: 'twitter', enabled: false },
  { name: 'Lens', key: 'lens', enabled: false },
];

export const MinusIcon = () => {
  return (
    <div style={{ display: 'flex', paddingBottom: 10 }}>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.5" width="24" height="24" rx="12" fill="#FFDFDF" />
        <path
          d="M7.75488 13.5703H16.2451V12.1465H7.75488V13.5703Z"
          fill="#FF3F3F"
        />
      </svg>
    </div>
  );
};

export const PlusIcon = () => {
  return (
    <div style={{ display: 'flex', paddingBottom: 10, cursor: 'pointer' }}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#DEEFE9" />
        <path
          d="M7.54395 13.0703H11.2881V16.709H12.7119V13.0703H16.4648V11.6465H12.7119V8.00781H11.2881V11.6465H7.54395V13.0703Z"
          fill="#38C953"
        />
      </svg>
    </div>
  );
};

const Credential = (props) => {
  const { item } = props;
  return (
    <div style={{ display: 'flex', paddingBottom: 10 }}>
      {item.enabled ? <PlusIcon /> : <MinusIcon />}
      <Space w={10} />
      <Text weight={300}>{item.name}</Text>
    </div>
  );
};

const IDCard = () => {
  const setGithubAuth = useUserStore((state) => state.setGithubAuth);
  const account = useAccount();
  const { data, isError, isLoading } = useEnsName({
    address: account.address,
    chainId: 1,
  });

  const { data: avatar } = useEnsAvatar({
    addressOrName: account.address,
    chainId: 1,
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user?.name) {
      setGithubAuth(session?.user?.name);
    }
  }, [session]);

  return (
    <div
      style={{
        height: 300,
        backgroundColor: 'white',
        width: 550,
        border: '1px solid #000000',
        boxShadow: '2px 4px 16px rgba(0, 0, 0, 0.25)',
        borderRadius: 32,
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ padding: 30 }}>
          <Text>
            {isLoading
              ? ''
              : data
              ? data
              : account.address
              ? formatAddressToShort(account.address)
              : ''}
          </Text>
        </div>

        <div style={{ padding: 30 }}>
          {credentials.map((item) => (
            <div
              key={item.key}
              onClick={async () => {
                if (!item.enabled) {
                  return;
                }
                if (session) {
                  await signOut();
                } else {
                  await signIn(item.key);
                }
              }}
            >
              <Credential item={item} />
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 15,
          left: 185,
          width: 550,
        }}
      >
        {mounted && <Text size="sm">{account.address}</Text>}
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 50,
          right: 0,
          backgroundColor: 'black',
          height: 50,
          width: 550,
        }}
      ></div>
    </div>
  );
};

export default IDCard;
