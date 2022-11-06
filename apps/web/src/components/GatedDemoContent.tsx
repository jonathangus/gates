import {
  AppShell,
  Center,
  Code,
  CopyButton,
  Header,
  Space,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { Gated } from 'gates.wtf';
import Head from 'next/head';
import { useRouter } from 'next/router';
import LogoHeader from '../components/Common/LogoHeader';
import { CopyIcon } from '../components/CurrentConditons';

type Props = { demoId: string };

const GatedDemoContent = ({ demoId }: Props) => {
  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <AppShell
        padding="md"
        header={
          <Header height={60} p="xs">
            <LogoHeader />
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Center>
          <div
            style={{
              backgroundColor: '#ededed',
              padding: 10,
              borderRadius: 5,
              boxShadow: '1px 2px 8px rgba(0, 0, 0, 0.25)',
            }}
          >
            <Center>
              <Text size="lg" weight={500}>
                Your gated content
              </Text>
            </Center>
            <Space h={10} />

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Vhh_GeBPOhs"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Center>
        <Space h={50} />

        <div style={{}}>
          <Center>
            <div style={{ width: 920 }}>
              <Text size="sm" weight={400}>
                Copy this snippet into your code to use Gate!
              </Text>
            </div>
          </Center>
          <Space h={10} />
          <Center>
            <div style={{ position: 'relative' }}>
              <Code
                block
                color="blue"
                style={{
                  borderRadius: 10,
                  padding: 20,
                  width: 900,
                  backgroundColor: '#ededed',
                }}
              >
                <div>
                  <code id="codeElm">{`<Gated gateId="${demoId}">`}</code>
                  <br />
                  <code id="codeElm">
                    {`  <iframe 
      width="560
      height="315"
      src="https://www.youtube.com/embed/Vhh_GeBPOhs"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen>
  </iframe>`}
                  </code>
                  <br />
                  <code id="codeElm">{`</Gated>`}</code>
                </div>
              </Code>
              <div style={{ position: 'absolute', top: 20, right: 15 }}>
                <CopyButton
                  value={`<Gated gateId="${demoId}" <iframe 
                      width="560
                      height="315"
                      src="https://www.youtube.com/embed/Vhh_GeBPOhs"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
                  </iframe></Gated>`}
                >
                  {({ copied, copy }) => (
                    <UnstyledButton onClick={copy}>
                      <CopyIcon color={copied ? 'white' : 'black'} />
                    </UnstyledButton>
                  )}
                </CopyButton>
              </div>
            </div>
          </Center>
        </div>
      </AppShell>
    </div>
  );
};

export default GatedDemoContent;
