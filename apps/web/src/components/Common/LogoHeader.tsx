import {
  Button,
  Center,
  Image,
  Space,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const WrongNetworkButton = ({ isMobile, onClick }) => {
  return (
    <Button
      onClick={onClick}
      styles={(theme) => ({
        root: {
          backgroundColor: 'white',
          border: 0,
          // height: 50,
          paddingLeft: isMobile ? 5 : 20,
          paddingRight: isMobile ? 5 : 20,
          width: isMobile ? '100%' : null,
          fontSize: isMobile ? 15 : 18,
          '&:hover': {
            backgroundColor: '#F7F7F7',
            color: 'black',
          },
          color: 'black',
        },
      })}
    >
      Wrong network
    </Button>
  );
};

export const ConnectedWalletInfo = (props) => {
  const { setAuthenticated, isMobile, authenticated } = props;
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        return (
          <div>
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <>
                    <Button
                      onClick={openConnectModal}
                      style={{ backgroundColor: 'black' }}
                      radius={7}
                    >
                      Connect
                    </Button>
                  </>
                );
              }

              if (chain.unsupported) {
                return (
                  <WrongNetworkButton
                    onClick={openChainModal}
                    isMobile={isMobile}
                  />
                );
              }

              return (
                <>
                  <div
                    style={{
                      display: isMobile ? null : 'flex',
                      gap: isMobile ? 0 : 0,
                      alignItems: 'center',
                      position: isMobile ? 'relative' : null,
                      height: isMobile ? null : 40,
                    }}
                  >
                    <Button
                      onClick={openAccountModal}
                      type="button"
                      styles={(theme) => ({
                        root: {
                          backgroundColor: 'white',
                          border: 0,
                          paddingLeft: isMobile ? null : 6,
                          color: 'black',
                          // paddingRight: 8,
                          '&:hover': {
                            backgroundColor: '#F7F7F7',
                          },
                          height: isMobile ? 20 : 30,
                          position: isMobile ? 'absolute' : null,
                          right: isMobile ? 0 : null,
                          top: isMobile ? 0 : null,
                        },
                      })}
                    >
                      {/* <Image src="img/purple-circle.png" width={17} atl="" /> */}
                      {account.displayName}
                    </Button>
                  </div>
                </>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

const LogoHeader = () => {
  const isMobile = false;

  const router = useRouter();
  return (
    <div
      style={{
        padding: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 0,
        paddingBottom: 20,
      }}
    >
      <Center>
        <UnstyledButton onClick={() => router.push('/')}>
          <Text weight={500}>arbi.gates.wtf</Text>
        </UnstyledButton>
        <Space w={20} />
        <UnstyledButton onClick={() => router.push('/snapshot')}>
          <Text weight={500}>snapshot</Text>
        </UnstyledButton>
        <Space w={20} />
        <UnstyledButton onClick={() => router.push('/demo')}>
          <Text weight={500}>demo</Text>
        </UnstyledButton>
        <Space w={20} />
        <UnstyledButton onClick={() => router.push('/livepeer-demo')}>
          <Text weight={500}>livepeer</Text>
        </UnstyledButton>
      </Center>
      <div></div>
      {/* <UnstyledButton onClick={() => router.push('/create')}>
        <Text weight={500}>create</Text>
      </UnstyledButton> */}

      <ConnectedWalletInfo isMobile={isMobile} />
    </div>
  );
};

export default LogoHeader;
