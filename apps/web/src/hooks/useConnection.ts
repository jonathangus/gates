import { useState } from 'react';
import { useEffect } from 'react';

const useConnection = (): boolean => {
  const [connected, setConntected] = useState(
    typeof window !== 'undefined' ? window.navigator.onLine : true
  );

  useEffect(() => {
    const onOnline = () => setConntected(true);
    const onOffline = () => setConntected(false);

    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);

    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  }, []);

  return connected;
};

export default useConnection;
