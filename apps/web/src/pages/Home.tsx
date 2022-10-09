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

const SigningFrame = () => {};

const Home = () => {
  const [scrollUp, setScrollUp] = useState(false);

  const [image, setImage] = useState('click');

  const controls = useAnimationControls();

  // const x = useSpring(0);

  // useEffect(() => {
  //   x.set(target);
  // }, [target]);

  async function animateFrame() {
    await controls.start({ x: 450 });
    setImage('complete');
  }

  console.log({ image });

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
          <div
            style={{
              position: 'absolute',
              top: 320,
              right: 125,
            }}
          >
            <BackFrame size={320} />
          </div>
          <motion.div animate={controls} transition={{ duration: 0.5 }}>
            <div style={{ paddingLeft: '25%' }}>
              <IDCard />
            </div>
          </motion.div>

          <div style={{}}>
            <CreateSigning image={image} animateFrame={animateFrame} />
          </div>
        </div>
      </AppShell>
    </div>
  );
};

export default Home;
