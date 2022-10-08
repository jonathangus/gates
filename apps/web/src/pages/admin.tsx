import { ConnectButton } from '@rainbow-me/rainbowkit';
import CreateConditions from '../components/CreateConditions';

const Page = () => {
  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <div>
        <ConnectButton />
        <CreateConditions />
      </div>
    </div>
  );
};

export default Page;
