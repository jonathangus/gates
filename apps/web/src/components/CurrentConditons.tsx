import {
  Button,
  Code,
  CopyButton,
  Notification,
  Popover,
  Space,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { useAccount, useEnsName } from 'wagmi';
import { CondiditonFrame } from './Icons/ConditionFrame';
export const CopyIcon = (props) => {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 40.945 40.945"
      fill={color || 'white'}
    >
      <g>
        <path
          d="M35.389,9h-6.166V1.5c0-0.827-0.671-1.5-1.5-1.5H15.454c-0.375,0-0.736,0.142-1.013,0.395L4.543,9.457
c-0.31,0.285-0.487,0.688-0.487,1.106v19.882c0,0.826,0.671,1.5,1.5,1.5h6.166v7.5c0,0.826,0.671,1.5,1.5,1.5h22.166
c0.829,0,1.5-0.674,1.5-1.5V10.5C36.889,9.673,36.217,9,35.389,9z M14.318,4.576v5.574H8.229L14.318,4.576z M7.057,28.945V13.15
h8.761c0.829,0,1.5-0.672,1.5-1.5V3h8.905v6h-3.104c-0.375,0-0.735,0.143-1.013,0.396l-9.897,9.063
c-0.31,0.283-0.487,0.687-0.487,1.105v9.381H7.057L7.057,28.945z M21.984,13.576v5.572h-6.086L21.984,13.576z M33.889,37.945
H14.723V22.148h8.762c0.828,0,1.5-0.672,1.5-1.5V12h8.904V37.945z"
        />
      </g>
    </svg>
  );
};

export const ConditionCard = (props) => {
  const { condition } = props;
  const glowStylesGreen = {
    color: '#38C953',
    filter: 'blur(10px)',
    fontFamily: 'Source Code Pro',
  };
  const glowStylesWhite = { color: 'white' };

  console.log({ condition }, "bob ");
  return (
    <div
      style={{
        margin: 10,
        position: 'relative',
      }}
    >
      <CondiditonFrame size={320} />
      <div style={{ position: 'absolute', top: 90, left: 40 }}>
        <Text style={glowStylesWhite} size="xl">
          {condition.header}
        </Text>
        <Space h={10} />
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
      <div style={{ position: 'absolute', top: 90, left: 40 }}>
        <Text style={glowStylesGreen} size="xl">
          {condition.header}
        </Text>
        <Space h={10} />
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
        <Popover width={450} position="bottom" shadow="md">
          <Popover.Target>
            <Button
              style={{ backgroundColor: '#38C953', width: '100%', height: 30 }}
            >
              Get query
            </Button>
          </Popover.Target>
          <Popover.Dropdown
            color="black"
            style={{
              width: 600,
              backgroundColor: '#424A54',
              color: '#FA9999',
              borderColor: '#424A54',
            }}
          >
            <Text size="sm" style={{ display: 'flex' }}>
              <div style={{ paddingTop: 1 }}>
                <CopyButton value={condition.query}>
                  {({ copied, copy }) => (
                    <UnstyledButton onClick={copy}>
                      <CopyIcon color={copied ? '#37C853' : 'white'} />
                    </UnstyledButton>
                  )}
                </CopyButton>
              </div>
              <Space w={10} />
              <Text style={{ color: 'white' }}>GET </Text>
              <Space w={5} />
              {condition.query}
            </Text>
          </Popover.Dropdown>
        </Popover>
      </div>
    </div>
  );
};

const CurrentConditons = (props) => {
  const { admin } = props;
  return (
    <div>
      <div style={{ display: 'flex' }}>
        {admin.conditions.map((condition, i) => {
          return <ConditionCard key={'condition' + i} condition={condition} />;
        })}
      </div>
    </div>
  );
};

export default CurrentConditons;
