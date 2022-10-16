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
import CreateConditions from '../components/CreateConditionsButton';
import CreateNewCondition from '../components/CreateNewCondition';
import CurrentConditons from '../components/CurrentConditons';

const admin = {
  name: 'global.eth',
  address: '0x124312321312312412',
  conditions: [
    {
      header: '#119 Gated conditions',
      scope: [
        {
          header: 'Token balance (ERC-721)',
          criteria: [
            'Contract address: 0xfAe3...3752.',
            'Minimum token balance: 1',
          ],
        },
        {
          header: 'Token balance (ERC-721)',
          criteria: ['Contract address: 0xfAe3...3752.'],
        },
      ],
      query: 'https://gates.wtf/api/verify?address=${address}&gateId=242',
    },
    {
      header: '#321 Gated conditions',
      scope: [
        {
          header: 'Twitter follow',
          criteria: ['Account handle: @ArbitrumDevs'],
        },
        {
          header: 'Twitter follow',
          criteria: ['Account handle: @Arbitrum'],
        },
      ],
      query: 'https://gates.wtf/api/verify?address=${address}&gateId=321',
    },
    {
      header: '#333 Gated conditions',
      scope: [
        {
          header: 'API Call',
          criteria: [
            'Request Url: "wwww.whatstheweather.com"',
            'Response: true',
          ],
        },

        {
          header: 'Staked Smoleverse',
          criteria: ['Staked School: 1'],
        },
      ],
      query: 'https://gates.wtf/api/verify?address=${address}&gateId=871',
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
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <Center>Create new condition</Center>
              </UnstyledButton>
            </div>
            <CurrentConditons admin={admin} />
          </>
        )}
      </AppShell>
    </div>
  );
};

export default Page;
