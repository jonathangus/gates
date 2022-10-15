import { Gated } from 'gates.wtf';
import { useRouter } from 'next/router';
import GatedDemoContent from '../components/GatedDemoContent';
import LivepeerDemo from '../components/LivepeerDemo';

const Demo = () => {
  const router = useRouter();
  const demoId = router?.query?.id;
  if (!demoId) {
    return <div>Missing demoId param</div>;
  }

  return <LivepeerDemo gateId={demoId as string} />;
};

export default Demo;
