import { useEffect, useMemo, useState } from 'react';
import Queue from 'queue-promise';
import axios from 'axios';

const useSnapshot = (
  addresses: string[],
  gateId: string,
  enabled: boolean,
  { onEnd }: any
) => {
  const queue = useMemo(() => new Queue({ concurrent: 3, interval: 500 }), []);
  const [failed, setFailed] = useState(0);
  const [success, setSuccess] = useState(0);
  const [successFullAddress, setSuccesfull] = useState([]);
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

        return address;
      });
    }

    queue.on('start', (...args) => console.log('start'));
    queue.on('stop', (...args) => console.log('stop'));
    queue.on('end', (...args) => {
      setEnd(true);
      onEnd(successFullAddress);
    });

    queue.on('resolve', (data) => {
      setSuccess((prev) => prev + 1);
      setSuccesfull((prev) => [...prev, data]);
    });
    queue.on('reject', (error) => {
      setFailed((prev) => prev + 1);
    });

    queue.start();
  };

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
