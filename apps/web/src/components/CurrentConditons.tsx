import { Button, Code, Text } from '@mantine/core';
import { useAccount, useEnsName } from 'wagmi';
import { CondiditonFrame } from './Icons/ConditionFrame';

const admin__ = {
  name: 'global.eth',
  address: '0x124312321312312412',
  conditions: [
    {
      scope: [
        {
          header: 'Token balance (ERC-20)',
          criteria:
            'Contract address: 0x9e...aa7c. \nMinimum token balance: 5ETH',
        },
        {
          header: 'Token balance (ERC-721)',
          criteria: 'Contract address: 0x9e...aa7c.',
        },
      ],
    },
    {
      scope: [
        {
          header: 'Twitter follow',
          criteria: 'Account handle: @anotherblock_io',
        },
        {
          header: 'Twitter follow',
          criteria: 'Account handle: @anotherblock_io',
        },
      ],
    },
    {
      scope: [
        {
          header: 'API Call',
          criteria:
            'Request Url: "https://wwww.whatstheweather.com"\nResponse: true',
        },

        {
          header: 'Twitter follow',
          criteria: 'Account handle: @anotherblock_io',
        },
      ],
    },
  ],
};

const ConditionCard = (props) => {
  const { condition } = props;

  const glowStylesGreen = {
    color: '#38C953',
    filter: 'blur(10px)',
    fontFamily: 'Source Code Pro',
  };
  const glowStylesWhite = { color: 'white' };

  console.log({ condition });
  return (
    <div
      style={{
        margin: 10,
        position: 'relative',
      }}
    >
      <CondiditonFrame size={250} />
      <div style={{ position: 'absolute', top: 70, left: 30 }}>
        <Text style={glowStylesWhite}>Gated Conditions</Text>
        {condition?.scope?.map((scope) => {
          return (
            <div>
              <Text size="xs" style={glowStylesWhite}>
                {scope.header}:{' '}
              </Text>
              <div style={{ paddingBottom: 8 }}>
                {scope.criteria.map((item) => (
                  <Text size="xs" style={glowStylesWhite}>
                    {item}
                  </Text>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ position: 'absolute', top: 70, left: 30 }}>
        <Text style={glowStylesGreen}>Gated Conditions</Text>
        {condition?.scope?.map((scope) => {
          return (
            <div>
              <Text size="xs" style={glowStylesGreen}>
                {scope.header}:{' '}
              </Text>
              <div style={{ paddingBottom: 8 }}>
                {scope.criteria.map((item) => (
                  <Text size="xs" style={glowStylesGreen}>
                    {item}
                  </Text>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ position: 'absolute', bottom: 20, left: 30, right: 20 }}>
        <Button
          style={{ backgroundColor: '#38C953', width: '100%', height: 30 }}
        >
          Get query
        </Button>
      </div>
    </div>
  );
};

const CurrentConditons = (props) => {
  const { admin } = props;
  console.log({ admin });
  return (
    <div>
      {/* <Text style={{ margin: 10, marginLeft: 25 }}>
        Your active gated conditions
      </Text> */}
      <div style={{ display: 'flex' }}>
        {admin.conditions.map((condition, i) => {
          return <ConditionCard key={'condition' + i} condition={condition} />;
        })}
      </div>
    </div>
  );
};

export default CurrentConditons;
