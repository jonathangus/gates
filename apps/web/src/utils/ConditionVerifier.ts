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
    const [type, conditionKey, args] = condition.split(':');

    if (!sources[type]) {
      throw new Error(`type ${type} does not exist`);
    }

    if (!sources[type][conditionKey]) {
      throw new Error(`command ${[conditionKey]} does not exist`);
    }

    const command = sources[type][conditionKey];
    // TODO parse string to obj
    return await command(args, JSON.parse(args));
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
