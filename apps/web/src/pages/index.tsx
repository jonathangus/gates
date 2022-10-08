import { Counter__factory } from 'web3-config';
import { useContractRead } from 'wagmi-lfg';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Home from './Home';

const Page = () => {
  const { data: currentTimestamp = null } = useContractRead(
    Counter__factory,
    'currentTimestamp'
  );

  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <Home />
    </div>
  );
};

export default Page;
