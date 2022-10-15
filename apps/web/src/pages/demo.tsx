import { Gated } from 'gates.wtf';
import { useRouter } from 'next/router';
import GatedDemoContent from '../components/GatedDemoContent';

const Demo = () => {
  const router = useRouter();
  const demoId = router?.query?.id;
  if (!demoId) {
    return <div>Missing demoId param</div>;
  }

  return (
    <Gated gateId={demoId as string}>
      <GatedDemoContent />
    </Gated>
  );
};

export default Demo;
