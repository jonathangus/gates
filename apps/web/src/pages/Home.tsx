import { useContractRead } from 'wagmi-lfg';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { AppShell, Navbar, Header, Center } from '@mantine/core';
import LogoHeader from '../components/Common/LogoHeader';
import IDCard from '../components/IDCard';
import CreateSigning from '../components/CreateSigning';
import { BackFrame, TopFrame } from '../components/Icons/TopFrame';
import { useState } from 'react';

const SigningFrame = () => {};

const Home = () => {
  const [scrollUp, setScrollUp] = useState(false);

  return (
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
        <div style={{ margin: 'auto', marginTop: '5%', height: '100vh' }}>
          <Center>
            <IDCard />
            <div>
              <div
                style={{
                  position: 'absolute',
                  bottom: 190,
                  right: 125,
                }}
              >
                <BackFrame size={300} />
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: -400,
                  right: 100,
                }}
              >
                <TopFrame />
              </div>
            </div>
            {/* <CreateSigning /> */}
          </Center>
        </div>
      </AppShell>
    </div>
  );
};

export default Home;
