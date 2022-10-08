import { Button, Image, Text, Space } from '@mantine/core';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useEnsName, useAccount } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { formatAddressToShort } from './../utils/formatter';
import { signIn, signOut, useSession } from 'next-auth/react';

const credentials = [
  { name: 'Github', key: 'github' },
  { name: 'Twitter', key: 'twitter' },
  { name: 'Lens', key: 'lens' },
];

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
      <PlusIcon />
      <Space w={10} />
      <Text weight={300}>{item.name}</Text>
    </div>
  );
};

const IDCard = () => {
  const isMobile = false;
  const account = useAccount();
  console.log({ account }, account.address);
  const { data, isError, isLoading } = useEnsName({
    address: account.address,
    chainId: 1,
  });

  const { data: session } = useSession();
  console.log('session', session);

  console.log({ data });

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
            <div onClick={() => signIn(item.key)}>
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
        <Text size="sm">{account.address}</Text>
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
