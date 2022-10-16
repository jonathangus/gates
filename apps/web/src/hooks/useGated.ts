import { useState, PropsWithChildren, useEffect } from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import {
  WagmiConfig,
  createClient,
  configureChains,
  useAccount,
  allChains,
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import { useContractRead } from 'wagmi-lfg';
import {
  AppShell,
  Navbar,
  Header,
  Center,
  UnstyledButton,
  Text,
} from '@mantine/core';
import { motion } from 'framer-motion';
import { useSpring, useAnimationControls } from 'framer-motion';

type Props = { gateId: string };

const useGated = ({ gateId }: Props) => {
  const { address, isConnected } = useAccount();
  const query = useQuery<any, any, any, any>(
    ['gatedddd', gateId, address],
    async () => {
      const { data } = await axios.get(
        `/api/verify?address=${address}&gateId=${gateId}`
      );

      return data;
    },
    {
      enabled: Boolean(address),
    }
  );

  return Boolean(query?.data && query.data.success);
};

export default useGated;
