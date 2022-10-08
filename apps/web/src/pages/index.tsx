import { Counter__factory } from 'web3-config';
import { useContractRead } from 'wagmi-lfg';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Page = () => {
  const { data: currentTimestamp = null } = useContractRead(
    Counter__factory,
    'currentTimestamp'
  );

  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <div>
        <ConnectButton />
      </div>
    </div>
  );
};

export default Page;
