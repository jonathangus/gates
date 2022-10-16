import { Input, Space } from '@mantine/core';
import { Gated } from 'gates.wtf';
import { useRouter } from 'next/router';
import GatedDemoContent from '../components/GatedDemoContent';
import LivepeerDemo from '../components/LivepeerDemo';

const Demo = () => {
  const router = useRouter();
  const demoId = router?.query?.id;
  return (
    <div>
      <div>
        Missing demoId param.{' '}
        <Input
          value={router?.query?.id || ''}
          onChange={(e) => {
            if (e.target.value == '') {
              router.push(`/livepeer-demo?id=`);
            }

            if (!isNaN(e.target.value)) {
              router.push(`/livepeer-demo?id=${e.target.value}`);
            }
          }}
        />
      </div>
      <Space h={30} />
      {demoId && <LivepeerDemo gateId={demoId as string} />}
    </div>
  );
};

export default Demo;
