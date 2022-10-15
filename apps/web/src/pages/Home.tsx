import { useContractRead } from 'wagmi-lfg';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
  AppShell,
  Navbar,
  Header,
  Center,
  UnstyledButton,
  Text,
} from '@mantine/core';
import LogoHeader from '../components/Common/LogoHeader';
import IDCard from '../components/IDCard';
import CreateSigning from '../components/CreateSigning';
import { BackFrame, TopFrame } from '../components/Icons/TopFrame';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSpring, useAnimationControls } from 'framer-motion';
import { useAccount } from 'wagmi';
import Link from 'next/link';

const SigningFrame = () => {};

const Home = () => {
  const [scrollUp, setScrollUp] = useState(false);
  const account = useAccount();
  const [image, setImage] = useState('click');

  const controls = useAnimationControls();
  async function animateFrame() {
    await controls.start({ x: 700 });
    setImage('complete');
  }

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  async function animateUp() {
    await controls.start({ y: 200 });
    // await controls.stop({ y: 1000 });
  }

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
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
            {account && mounted && account.address && (
              <div
                style={{
                  position: 'absolute',
                  top: 320,
                  right: 125,
                }}
              >
                <motion.div animate={{ y: 0 }} transition={{ duration: 0.1 }}>
                  <BackFrame size={320} />
                </motion.div>
              </div>
            )}
            <motion.div animate={controls} transition={{ duration: 0.5 }}>
              <div style={{ paddingLeft: '29%' }}>
                <IDCard text="" />
              </div>
            </motion.div>

            {account && mounted && account.address && (
              <motion.div animate={{ y: 400 }} transition={{ duration: 0.5 }}>
                <div>
                  <CreateSigning image={image} animateFrame={animateFrame} />
                </div>
              </motion.div>
            )}
          </div>
          <div
            style={{
              position: 'fixed',
              left: '50%',
              bottom: 20,
              color: 'lightgray',
              cursor: 'pointer',
              transform: 'translateX(-50%)',
            }}
          >
            <Link href="/create">
              <Text weight={500}>Create</Text>
            </Link>
          </div>
        </AppShell>
      </div>{' '}
    </div>
  );
};

export default Home;
