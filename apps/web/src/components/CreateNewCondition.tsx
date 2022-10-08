import {
  Button,
  Center,
  Code,
  Input,
  Space,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { useState } from 'react';
import { useAccount, useEnsName } from 'wagmi';
import { CondiditonFrame } from './Icons/ConditionFrame';
import { PlusIcon } from './IDCard';

const conditions = [
  {
    header: 'Token balance (ERC-20)',
    description:
      'Modernipsum dolor sit amet art nouveau avant-garde precisionism performance art superstroke avant-garde, video game art historicism.',
  },
  {
    header: 'Token balance (ERC-20)',
    description:
      'Modernipsum dolor sit amet art nouveau avant-garde precisionism performance art superstroke avant-garde, video game art historicism.',
  },
  {
    header: 'Token balance (ERC-20)',
    description:
      'Modernipsum dolor sit amet art nouveau avant-garde precisionism performance art superstroke avant-garde, video game art historicism.',
  },
  {
    header: 'Token balance (ERC-20)',
    description:
      'Modernipsum dolor sit amet art nouveau avant-garde precisionism performance art superstroke avant-garde, video game art historicism.',
  },
  {
    header: 'Token balance (ERC-20)',
    description:
      'Modernipsum dolor sit amet art nouveau avant-garde precisionism performance art superstroke avant-garde, video game art historicism.',
  },
  {
    header: 'Token balance (ERC-20)',
    description:
      'Modernipsum dolor sit amet art nouveau avant-garde precisionism performance art superstroke avant-garde, video game art historicism.',
  },
  {
    header: 'Token balance (ERC-20)',
    description:
      'Modernipsum dolor sit amet art nouveau avant-garde precisionism performance art superstroke avant-garde, video game art historicism.',
  },
];

const ConditionCardCriteria = (props) => {
  const { condition } = props;
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div
        style={{
          width: 542,
          height: expanded ? 230 : 90,
          backgroundColor: '#FFFFFF',
          boxShadow: '2px 4px 16px rgba(0, 0, 0, 0.25)',
          borderRadius: 16,
          marginBottom: 20,
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <UnstyledButton
            style={{ paddingTop: 30, paddingLeft: 20 }}
            onClick={() => setExpanded(!expanded)}
          >
            <PlusIcon />
          </UnstyledButton>
          <div
            style={{
              paddingTop: 10,
              paddingLeft: 10,
            }}
          >
            <Text weight={600} style={{ fontSize: 14 }}>
              {condition.header}
            </Text>
            <Text style={{ fontSize: 14 }}>{condition.description}</Text>
          </div>
        </div>
        {expanded && (
          <div
            style={{
              backgroundColor: '#EFEFEF',
              height: 120,
              padding: 10,
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 14 }}>Contract address</Text>
            <Input />
            <Text style={{ fontSize: 14 }}>Minimum token balance</Text>
            <Input />
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

const CreateNewCondition = (props) => {
  const { admin } = props;
  console.log({ admin });
  return (
    <div style={{ position: 'relative' }}>
      <div style={{}}>
        {conditions.map((condition, i) => {
          return (
            <div>
              <Center>
                <ConditionCardCriteria
                  i={'condition' + i}
                  condition={condition}
                />
              </Center>
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
