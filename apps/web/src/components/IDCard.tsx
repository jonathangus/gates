import { Button, Image, Text } from '@mantine/core';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useEnsName, useAccount } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { formatAddressToShort } from './../utils/formatter';
const IDCard = () => {
  const isMobile = false;
  const account = useAccount();
  const { data, isError, isLoading } = useEnsName({
    address: account.address,
    chainId: 1,
  });

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
      <div style={{ padding: 30 }}>
        <Text>
          {isLoading
            ? ''
            : isError
            ? 'error'
            : data
            ? data
            : account.address
            ? formatAddressToShort(account.address)
            : ''}
        </Text>
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
