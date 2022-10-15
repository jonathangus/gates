import { Player } from '@livepeer/react';
type Props = { gateId: string };

const playbackId = '344fr1ethnzlvhaj';

const LivepeerDemo = ({}: Props) => {
  return (
    <Player
      title="Waterfalls"
      playbackId={playbackId}
      loop
      autoPlay
      showTitle={false}
      muted
    />
  );
};

export default LivepeerDemo;
