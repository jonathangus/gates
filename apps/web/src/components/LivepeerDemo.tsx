import { Player } from '@livepeer/react';
import { Switch } from '@mantine/core';
import { useEffect, useState } from 'react';
import useGated from '../hooks/useGated';

type Props = { gateId: string };

const goodQuality = '8d60jgt727n8b4o2';
const badQuality = '558by8pe0vpxwg2w';

const LivepeerDemo = ({ gateId }: Props) => {
  const [useGood, setGood] = useState(false);
  const elligble = useGated({ gateId });

  useEffect(() => {
    if (!elligble) {
      setGood(false);
    }
  }, [elligble]);
  const playbackId = useGood ? goodQuality : badQuality;

  return (
    <>
      <div>
        {!elligble
          ? 'You are only allowed to see low res 😐'
          : 'You can see full res LFG 🔥'}
      </div>
      <Switch
        disabled={!elligble}
        checked={useGood}
        onChange={(event) => setGood(event.currentTarget.checked)}
      />
      <Player playbackId={playbackId} loop autoPlay showTitle={false} muted />
    </>
  );
};

export default LivepeerDemo;
