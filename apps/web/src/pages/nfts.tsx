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
    }
  );


  
  const { data:balanceOf } = useContractRead(Arbigates__factory, 'balanceOf', {
    args: ["0xA4B7CEe8409673624EC9B075f5A4f9b8EbAdEd49"],
  });

  console.log(balanceOf)
  const { data } = useContractRead(Arbigates__factory, 'addressesToVerify', {
    args: [address],
  });
  console.log({ data });
    useEvent(Arbigates__factory, 'Transfer', {
      onChange: (data) => {
        if (data[0] === NULL_ADDRESS && data[1] === address) {
          setMinted(true);
        }
      },
    });

  const eligible = useGated({ gateId });

  return (
    <Box style={{ display: 'flex', flexDirection: 'column' }}>
      {alreadySignedUp
        ? "You're already signed up!"
        : 'Sign up to mint the NFT'}
      <Space h={30} />

      {eligible && isSignedUp && (
        <div>User is eligible. You should receive an NFT. Wait a minute...</div>
      )}
      <Button
        disabled={isSignedUp}
        style={{ width: '100px' }}
        loading={isLoading}
        onClick={(e) => {
            write({
                args: [address],
              });

              return
          if (!data?.toString()) {
            console.log('data is falsey');
        
            setIsSignedUp(true);
            return;
          }
          setAlreadySignedUp(true);
        }}
      >
        Sign up
      </Button>
      <Space h={30} />
      {eligible && isSignedUp && (
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
