import { Player } from '@livepeer/react';
import { Center, Space, Switch } from '@mantine/core';
import { useEffect, useState } from 'react';
import useGated from '../hooks/useGated';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { useAccount } from 'wagmi';

type Props = { gateId: string };

const goodQuality = '8d60jgt727n8b4o2';
const badQuality = '558by8pe0vpxwg2w';

const LivepeerDemo = ({ gateId }: Props) => {

 
  const [useGood, setGood] = useState(false);
  const elligble = useGated({ gateId });
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (!elligble) {
      setGood(false);
    }
  }, [elligble]);
  const playbackId = useGood ? goodQuality : badQuality;

  return (
    <>
      <Center>
        {' '}
        <div>
          {!elligble
            ? 'You are only allowed to see low res 😐'
            : 'You can see full res LFG 🔥'}
        </div>
        <Switch
          style={{ cursor: 'pointer' }}
          disabled={!elligble}
          checked={useGood}
          onChange={(event) => setGood(event.currentTarget.checked)}
        />
      </Center>
      <Space h={20} />
      <Player playbackId={playbackId} loop autoPlay showTitle={false} muted />
      {useGood && (
        <Confetti
          recycle={false}
          style={{ zIndex: 123123123123123123, position: 'fixed' }}
          width={width}
          numberOfPieces={700}
          height={height}
          initialVelocityY={2}
        />
      )}
    </>
  );
};

export default LivepeerDemo;
