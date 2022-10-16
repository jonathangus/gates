import { Button, Space, Box, Image, Text } from '@mantine/core';
import { useContractWrite, useContractRead } from 'wagmi-lfg';
import { useAccount } from 'wagmi';
import useEvent from '../hooks/useEvent';
import { Arbigates__factory } from 'web3-config';
import { useState } from 'react';
import useGated from '../hooks/useGated';

const gateId = '4';
const NFTs = () => {
  const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [alreadySignedUp, setAlreadySignedUp] = useState(false);
  const [minted, setMinted] = useState(false);
  const { address } = useAccount();
  const { write, isLoading } = useContractWrite(
    Arbigates__factory,
    'addAddress',
    {
      reckless: true,
      onSuccess: () => {
        localStorage.setItem('minted', "true")
        setMinted(true)
        setIsSignedUp(false)
      },
    }
  );

  // const { data: balanceOf } = useContractRead(Arbigates__factory, 'balanceOf', {
  //   args: [address],
  //   enabled: Boolean(address),
  // });

  const { data: match } = useContractRead(
    Arbigates__factory,
    'addressesToVerify',
    {
      args: [address],
      enabled: Boolean(address),
    }
  );

  const a = useEvent(Arbigates__factory, 'Transfer', {
    onChange: (data) => {
      console.log(data);
      if (data[0] === NULL_ADDRESS && data[1] === address) {
        setMinted(true);
      }
    },
  });

  const eligible = useGated({ gateId });

  return (
    <Box style={{ display: 'flex', flexDirection: 'column' }}>
      {alreadySignedUp
        ? "You've already minted!"
        : 'Sign up to mint the NFT'}
      <Space h={30} />

      {/* {balanceOf && <div>you own {balanceOf.toString()}</div>} */}

      {eligible && isSignedUp && (
        <div>User is eligible. You should receive an NFT. Wait a minute...</div>
      )}
      <Button
        style={{ width: '100px' }}
        loading={isLoading}
        disabled={alreadySignedUp}
        onClick={(e) => {
          if(localStorage.getItem("minted")) {
            setAlreadySignedUp(true)
            return;
          }
          write({
            args: [address],
          });
          setIsSignedUp(true)
        }}
      >
        Sign up
      </Button>
      <Space h={30} />
      {minted && (
        <>
          <Text>Token Id: 1337</Text>

          <Image
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaTDR03yVSTVOO4JAiOKLIyqbM1FHYOACROw&usqp=CAU'
            }
            alt={'Bob Saget'}
          />
        </>
      )}
    </Box>
  );
};

export default NFTs;
