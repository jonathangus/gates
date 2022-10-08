import { Counter__factory } from 'web3-config';
import { useContractRead } from 'wagmi-lfg';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { AppShell, Navbar, Header } from '@mantine/core';
import LogoHeader from '../components/Common/LogoHeader';


const Home = () => {
  
  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <AppShell
      padding="md"
      header={<Header height={60} p="xs"><LogoHeader /></Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
    </AppShell>
    </div>
  );
};

export default Home;
