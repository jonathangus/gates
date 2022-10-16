import { Input } from '@mantine/core';
import { Gated } from 'gates.wtf';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button } from 'ui';
import GatedDemoContent from '../components/GatedDemoContent';

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
              router.push(`/demo?id=`);
            }

            if (!isNaN(e.target.value)) {
              router.push(`/demo?id=${e.target.value}`);
            }
          }}
        />
      </div>
      <Gated gateId={demoId as string}>
        <GatedDemoContent demoId={demoId as string} />
      </Gated>
    </div>
  );
};

export default Demo;
