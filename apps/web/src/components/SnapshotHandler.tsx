import { Button } from '@mantine/core';
import { useEffect, useState } from 'react';
import useSnapshot from '../hooks/useSnapshot';
import SnapShoter from '../utils/Snapshoter';

type Props = { addresses: string[] };

const SnapshotHandler = ({ addresses }: Props) => {
  const [start, setStart] = useState(false);
  const { failed, success } = useSnapshot(addresses.slice(0, 50), '3', start);

  if (!start) {
    return (
      <div>
        {addresses.length} addresses found.{' '}
        <Button onClick={() => setStart(true)}>
          Click here to generate on-chain snapshot
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div>Total addresses: {addresses.length}</div>
      <div>Failed: {failed}</div>
      <div>Success: {success}</div>
    </div>
  );
};

export default SnapshotHandler;
