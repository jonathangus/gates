import { useEffect, useMemo, useState } from 'react';
import Queue from 'queue-promise';
import axios from 'axios';

const useSnapshot = (addresses: string[], gateId: string, enabled: boolean) => {
  const queue = useMemo(() => new Queue({ concurrent: 3, interval: 1000 }), []);
  const [failed, setFailed] = useState(0);
  const [success, setSuccess] = useState(0);
  const [end, setEnd] = useState(false);

  const lfg = () => {
    for (let address of addresses) {
      queue.enqueue(async () => {
        const { data } = await axios.get(
          `/api/verify?address=${address}&gateId=${gateId}`
        );
        if (!data.success) {
          throw new Error('Not elligble');
        }
      });
    }

    queue.on('start', (...args) => console.log('start'));
    queue.on('stop', (...args) => console.log('stop'));
    queue.on('end', (...args) => setEnd(true));

    queue.on('resolve', (data) => {
      console.log('resolve', data);
      setSuccess((prev) => prev + 1);
    });
    queue.on('reject', (error) => {
      console.error('reject', error);
      setFailed((prev) => prev + 1);
    });

    queue.start();
  };

  console.log({ failed, success });

  useEffect(() => {
    if (enabled) {
      lfg();
    }

    return () => {
      queue.stop();
    };
  }, [enabled]);

  return {
    failed,
    success,
    end,
  };
};

export default useSnapshot;
