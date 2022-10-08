import { ConnectButton } from '@rainbow-me/rainbowkit';
import CreateSigning from '../components/CreateSigning';

const Page = () => {
  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <div>
        <ConnectButton />
        <CreateSigning />
      </div>
    </div>
  );
};

export default Page;
