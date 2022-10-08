import {
  Button,
  Center,
  Code,
  Image,
  Input,
  Space,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { useState } from 'react';
import { useAccount, useEnsName } from 'wagmi';
import { sources } from '../sources';
import { CondiditonFrame } from './Icons/ConditionFrame';
import { MinusIcon, PlusIcon } from './IDCard';

const conditions = [
  {
    metadata: {
      title: 'Token balance (ERC-20)',
      description:
        'Modernipsum dolor sit amet art nouveau avant-garde precisionism performance art superstroke avant-garde, video game art historicism.',
    },
  },
  {
    metadata: {
      title: 'Token balance (ERC-20)',
      description:
        'Modernipsum dolor sit amet art nouveau avant-garde precisionism performance art superstroke avant-garde, video game art historicism.',
    },
  },
  {
    metadata: {
      title: 'Token balance (ERC-20)',
      description:
        'Modernipsum dolor sit amet art nouveau avant-garde precisionism performance art superstroke avant-garde, video game art historicism.',
    },
  },
  {
    metadata: {
      title: 'Token balance (ERC-20)',
      description:
        'Modernipsum dolor sit amet art nouveau avant-garde precisionism performance art superstroke avant-garde, video game art historicism.',
    },
  },
];

const ConditionCriteriaCard = (props) => {
  const { condition, logo, id } = props;

  //   console.log('criteria card', { condition }, id);
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div
        style={{
          width: 542,
          backgroundColor: '#FFFFFF',
          boxShadow: '2px 4px 16px rgba(0, 0, 0, 0.25)',
          borderRadius: 16,
          marginBottom: 20,
          position: 'relative',
          paddingTop: 10,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingBottom: expanded ? 0 : 20,
          }}
        >
          <UnstyledButton
            style={{ paddingTop: 30, paddingLeft: 20 }}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <MinusIcon /> : <PlusIcon />}
          </UnstyledButton>
          <div
            style={{
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text weight={600} style={{ fontSize: 14 }}>
                {condition.name}
              </Text>
              <Image
                src={logo}
                alt=""
                width={id === 'api' ? 29 : id === 'github' ? 26 : 22}
                height={
                  id === 'the-graph' || id === 'quicknode'
                    ? 22
                    : id === 'github'
                    ? 26
                    : 18
                }
                radius={5}
              />
            </div>

            <Text style={{ fontSize: 14 }}>{condition.description}</Text>
          </div>
        </div>
        {expanded && (
          <div
            style={{
              backgroundColor: '#EFEFEF',
              padding: 10,
              marginTop: 20,
              paddingBottom: 10,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
            }}
          >
            {condition.fields && condition.fields.length ? (
              <>
                {condition.fields.map((item) => {
                  return (
                    <>
                      <Text style={{ fontSize: 14 }}>
                        {item.title && item.title.length > 2
                          ? item.title
                          : item.name}
                      </Text>
                      <Input />
                      <Space h={5} />
                    </>
                  );
                })}
              </>
            ) : (
              <>
                <Text style={{ fontSize: 14 }}>Contract address</Text>
                <Input />
                <Text style={{ fontSize: 14 }}>Minimum token balance</Text>
                <Input />
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

const EmptyConditionCard = (props) => {
  const glowStylesGreen = {
    color: '#38C953',
    filter: 'blur(10px)',
    fontFamily: 'Source Code Pro',
  };
  const glowStylesWhite = { color: 'white' };

  return (
    <div
      style={{
        margin: 10,
        position: 'relative',
      }}
    >
      <CondiditonFrame size={326} />
      <div style={{ position: 'absolute', top: 180, left: 10, width: 300 }}>
        <Center style={{ textAlign: 'center', fontSize: 20 }}>
          <Text style={glowStylesWhite}>
            {`Zero conditions`}
            <br />
            {`configured`}
          </Text>
        </Center>
        <Space h={15} />
        <Center style={{ textAlign: 'center', fontSize: 16 }}>
          <Text style={glowStylesWhite}>
            {`Get started by clicking`} <br /> {`on a condition and`} <br />
            {`setting up its parameters`}
          </Text>
        </Center>
      </div>
      <div style={{ position: 'absolute', top: 180, left: 10, width: 300 }}>
        <Center style={{ textAlign: 'center', fontSize: 20 }}>
          <Text style={glowStylesGreen}>
            {`Zero conditions`}
            <br />
            {`configured`}
          </Text>
        </Center>
        <Space h={15} />

        <Center style={{ textAlign: 'center', fontSize: 16 }}>
          <Text style={glowStylesGreen}>
            {`Get started by clicking`} <br /> {`on a condition and`} <br />
            {`setting up its parameters`}
          </Text>
        </Center>
      </div>

      <div style={{ position: 'absolute', bottom: 20, left: 30, right: 20 }}>
        <Button
          style={{ backgroundColor: '#38C953', width: '100%', height: 30 }}
        ></Button>
      </div>
    </div>
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

const Source = (props) => {
  const { source } = props;

  console.log('criteria card', { source });
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      {source.conditions.map((condition, i) => {
        return (
          <div>
            <Center>
              <ConditionCriteriaCard
                i={'condition' + i}
                condition={condition}
                logo={source?.metadata?.logo}
                id={source?.id}
              />
            </Center>
          </div>
        );
      })}
    </>
  );
};

const CreateNewCondition = (props) => {
  const { admin, setCreateNew } = props;
  console.log({ admin });
  const [gatedCondition, setGatedCondition] = useState();

  const sourcesList = Object.values(sources);
  console.log({ sourcesList });

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', left: 10, top: 0 }}>
        <UnstyledButton onClick={() => setCreateNew(false)}>
          <Text style={{ fontSize: 28 }}>←</Text>
        </UnstyledButton>
      </div>

      <div style={{}}>
        <Center>
          <Text
            style={{
              fontSize: 22,
              width: 542,
              color: '#959595',
              fontWeight: 650,
            }}
          >
            Conditions
          </Text>
        </Center>
        <Space h={10} />
        {sourcesList.map((source, i) => {
          return (
            <div>
              <Source source={source} />
            </div>
          );
        })}
      </div>
      <div style={{ position: 'absolute', right: 10, top: 120 }}>
        <EmptyConditionCard />
      </div>
    </div>
  );
};

export default CreateNewCondition;
