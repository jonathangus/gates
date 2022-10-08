import { sources } from '../sources';

type ConstructorArgs = {
  address: string;
  conditions: string[];
};

class ConditionVerifier {
  conditions;
  address;

  constructor({ address, conditions }: ConstructorArgs) {
    this.address = address;
    this.conditions = conditions;
  }

  createRequest = async (condition: string): Promise<boolean> => {
    const [type, conditionKey, ...args] = condition.split(':');
    const restArgs = args.join(':');

    const rest = condition
      .replace(`${type}:${conditionKey}`, '')
      .replace(':', '');

    if (!sources[type]) {
      throw new Error(`type ${type} does not exist`);
    }

    const match = sources[type].conditions.find(
      (condition) => condition.key === conditionKey
    );

    if (!match) {
      throw new Error(`command ${[conditionKey]} does not exist`);
    }

    return await match.method(JSON.parse(rest), {});
  };

  verify = async (): Promise<boolean> => {
    try {
      for (let condition of this.conditions) {
        let success = this.createRequest(condition);

        if (!success) {
          return false;
        }
      }

      return true;
    } catch (e) {
      throw e;
    }
  };
}

export default ConditionVerifier;
