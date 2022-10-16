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
import { useEffect, useState } from 'react';
import { useAccount, useEnsName } from 'wagmi';
import { sources } from '../sources';
import { useFieldStore } from '../stores/useFieldStore';
import CreateConditionsButton from './CreateConditionsButton';
import CreateConditions from './CreateConditionsButton';
import Fields from './Fields';
import { CondiditonFrame } from './Icons/ConditionFrame';
import { MinusIcon, PlusIcon } from './IDCard';

const ConditionCriteriaCard = (props) => {
  const {
    condition,
    logo,
    id,
    setGatedConditions,
    gatedConditions,
    conditionID,
  } = props;

  const fields = useFieldStore((state) => state.fields);
  const setField = useFieldStore((state) => state.setField);

  const [expanded, setExpanded] = useState(false);
  function updateCondition(element, fieldID, value, field) {
    const condition = element.fields?.forEach((fld) => {
      if (fld.fieldID === fieldID) {
        fld.fieldID = fld.fieldID;
        fld.name = fld.name;
        fld.type = fld.type;
        fld.value = value;
      }
      if (
        element.fields
          .filter((i) => i)
          .map((item) => item.fieldID)
          .indexOf(fieldID) === -1
      ) {
        element.fields.push({
          fieldID: fieldID,
          name: field.name,
          type: field.type,
          title: field.title,
          value: value,
        });
      }
    });
    return condition;
  }

  function addOrEdit(field, value, fieldID, elem) {
    const prevFields = (fields[conditionID] && fields[conditionID].field) || {};

    // console.log('prevFields', prevFields);
    setField(conditionID, elem, id, {
      ...prevFields,
      [field.name]: value,
    });

    return;
    if (
      gatedConditions?.length > 0 &&
      gatedConditions
        .filter((i) => i)
        .map((item) => item.uniqueID)
        .indexOf(conditionID) > -1
    ) {
      const tmpGatedConditions = [...gatedConditions];

      tmpGatedConditions.map((element) => {
        if (element.uniqueID === conditionID) {
          element = updateCondition(element, fieldID, value, field);
        } else return;
      });
      setGatedConditions(tmpGatedConditions);
    } else {
      const tmpGatedConditions =
        gatedConditions && gatedConditions.length > 0
          ? [...gatedConditions]
          : [];

      const gatedCondition = {
        uniqueID: conditionID,
        id: id,
        key: condition.key,
        name: condition.name,
        fields: [
          {
            fieldID: fieldID,
            name: field.name,
            type: field.type,
            title: field.title,
            value: value,
          },
        ],
      };
      tmpGatedConditions.push(gatedCondition);
      setGatedConditions(tmpGatedConditions);
    }
  }

  function removeCondition() {
    if (gatedConditions?.length > 0) {
      let tmpGatedConditions = [...gatedConditions];
      console.log('removed ', tmpGatedConditions, tmpGatedConditions.length);

      tmpGatedConditions = tmpGatedConditions.filter((element) => {
        console.log(
          element.uniqueID,
          conditionID,
          element.uniqueID != conditionID
        );
        return element.uniqueID != conditionID;
      });

      console.log(tmpGatedConditions.length);
      setGatedConditions(tmpGatedConditions);
    }
  }

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
          opacity: condition.disabled ? '0.5' : 1,
          pointerEvents: condition.disabled ? 'none' : '',
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
            onClick={() => {
              if (expanded) {
                removeCondition();
              }
              return setExpanded(!expanded);
            }}
          >
            {expanded ? <MinusIcon /> : <PlusIcon />}
          </UnstyledButton>
          <div
            style={{
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text weight={600} style={{ fontSize: 14 }}>
                {condition.name}
              </Text>
              <Image
                src={logo}
                alt=""
                width={
                  id === 'api'
                    ? 29
                    : id === 'github'
                    ? 26
                    : id === 'poap'
                    ? 22
                    : 22
                }
                height={
                  id === 'the-graph' || id === 'quicknode'
                    ? 22
                    : id === 'github'
                    ? 26
                    : id === 'poap'
                    ? 28
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
                {condition.fields.map((item, i) => {
                  return (
                    <>
                      <Fields
                        item={item}
                        addOrEdit={addOrEdit}
                        condition={condition}
                        i={i}
                      />
                      <Space h={5} />
                    </>
                  );
                })}
              </>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export const ConditionPreview = (props) => {
  const { condition, gatedConditions } = props;

  const glowStylesGreen = {
    color: '#38C953',
    filter: 'blur(10px)',
    fontFamily: 'Source Code Pro',
  };
  const glowStylesWhite = {
    color: 'white',
    wordBreak: 'break-all',
    paddingRight: 30,
  };
  const fields = useFieldStore((state) => state.fields);
  const itemz = Object.values(fields).map((value) => {
    const fieldz = Object.entries(value.field).map(([key, _value]) => {
      const field = value.element.fields.find((field) => field.name == key);

      return {
        name: field.title || field.name,
        value: _value,
      };
    });

    return {
      name: value.element.name,
      fields: fieldz,
    };
  });

  return (
    <div
      style={{
        margin: 10,
        position: 'relative',
      }}
    >
      <CondiditonFrame size={326} />

      {itemz.length > 0 ? (
        <>
          <div style={{ position: 'absolute', top: 80, left: 40 }}>
            <Text style={glowStylesWhite}>Gated Conditions</Text>
            {itemz.map((cond) => {
              return (
                <div>
                  <Text size="xs" style={glowStylesWhite}>
                    {cond.name}
                  </Text>
                  <div style={{ paddingBottom: 8 }}>
                    {cond.fields.map((item) => (
                      <Text size="xs" style={glowStylesWhite}>
                        {item.value === 'true'
                          ? `${item.name}: ✅`
                          : item.value === 'false'
                          ? `${item.name}: ❌`
                          : `${item.name}: ${item.value}`}{' '}
                      </Text>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ position: 'absolute', top: 70, left: 30 }}>
            <Text style={glowStylesGreen}>Gated Conditions</Text>
            {gatedConditions?.map((cond) => {
              return (
                <div>
                  <Text size="xs" style={glowStylesGreen}>
                    {cond.name}
                  </Text>
                  <div style={{ paddingBottom: 8 }}>
                    {cond.fields.map((item) => (
                      <Text size="xs" style={glowStylesGreen}>
                        {item.value === 'true'
                          ? `${item.title}:✅`
                          : item.value === 'false'
                          ? `${item.title}:❌`
                          : `${item.title}: ${item.value}`}
                      </Text>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div
            style={{ position: 'absolute', bottom: 35, left: 30, right: 20 }}
          >
            <CreateConditionsButton gatedConditions={gatedConditions} />
          </div>
        </>
      ) : (
        <>
          <div style={{ position: 'absolute', top: 180, left: 10, width: 350 }}>
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
          <div style={{ position: 'absolute', top: 180, left: 5, width: 350 }}>
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

          <div
            style={{ position: 'absolute', bottom: 35, left: 30, right: 20 }}
          >
            <Button
              disabled
              style={{
                backgroundColor: '#38C953',
                width: '100%',
                height: 30,
                color: 'white',
              }}
            >
              Get query
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

const Source = (props) => {
  const { source, gatedConditions, setGatedConditions, sourceId } = props;

  const [sourceCondition, setSourceCondition] = useState(gatedConditions);

  return (
    <>
      {source.conditions.map((condition, i) => {
        return (
          <div>
            <Center>
              <ConditionCriteriaCard
                conditionID={sourceId + '_condition_id_' + i}
                condition={condition}
                logo={source?.metadata?.logo}
                id={source?.id}
                gatedConditions={gatedConditions}
                setGatedConditions={setGatedConditions}
                sourceCondition={sourceCondition}
                setSourceCondition={setSourceCondition}
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
  const [gatedConditions, setGatedConditions] = useState([]);
  const sourcesList = Object.values(sources);

  //   const gated = {
  //     uniqueID: 'source_0_condition_0',
  //     id: 'api',
  //     key: 'get',
  //     fields: [
  //       {
  //         fieldID: 'field_0',
  //         name: 'selector',
  //         value: '',
  //       },
  //     ],
  //   };

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
              <Source
                sourceId={'source_id_' + i}
                source={source}
                setGatedConditions={setGatedConditions}
                gatedConditions={gatedConditions}
              />
            </div>
          );
        })}
      </div>
      <div style={{ position: 'fixed', right: 10, top: 130 }}>
        <ConditionPreview gatedConditions={gatedConditions} />
      </div>
    </div>
  );
};

export default CreateNewCondition;
