import {
  AppShell,
  Button,
  Center,
  Header,
  Navbar,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useState } from 'react';
import LogoHeader from '../components/Common/LogoHeader';
import CreateConditions from '../components/CreateConditions';
import CreateNewCondition from '../components/CreateNewCondition';
import CurrentConditons from '../components/CurrentConditons';

const admin = {
  name: 'global.eth',
  address: '0x124312321312312412',
  conditions: [
    {
      scope: [
        {
          header: 'Token balance (ERC-20)',
          criteria: [
            'Contract address: 0x9e...aa7c.',
            'Minimum token balance: 5ETH',
          ],
        },
        {
          header: 'Token balance (ERC-721)',
          criteria: ['Contract address: 0x9e...aa7c.'],
        },
      ],
    },
    {
      scope: [
        {
          header: 'Twitter follow',
          criteria: ['Account handle: @anotherblock'],
        },
        {
          header: 'Twitter follow',
          criteria: ['Account handle: @ethglobal'],
        },
      ],
    },
    {
      scope: [
        {
          header: 'API Call',
          criteria: [
            'Request Url: "wwww.whatstheweather.com"',
            'Response: true',
          ],
        },

        {
          header: 'Twitter follow',
          criteria: ['Account handle: @bellosights'],
        },
      ],
    },
  ],
};

const Page = () => {
  const [createNew, setCreateNew] = useState(false);

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
        {createNew ? (
          <CreateNewCondition admin={admin} setCreateNew={setCreateNew} />
        ) : (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginLeft: 25,
                marginRight: 25,
                paddingBottom: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  width: 542,
                  color: '#959595',
                  fontWeight: 650,
                }}
              >{`Recent gates`}</Text>
              <UnstyledButton
                onClick={() => setCreateNew(true)}
                style={{
                  padding: 10,
                  border: '1px solid #000000',
                  boxShadow: '2px 4px 16px rgba(0, 0, 0, 0.25)',
                  borderRadius: 32,
                }}
              >
                <Center>Create new condition</Center>
              </UnstyledButton>
            </div>
            <CurrentConditons admin={admin} />
          </>
        )}
      </AppShell>
      <CreateConditions />
    </div>
  );
};

export default Page;
