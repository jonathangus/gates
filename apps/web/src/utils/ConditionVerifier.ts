import { commands } from '../sources/commands';

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

    if (!commands[type]) {
      throw new Error(`type ${type} does not exist`);
    }

    if (!commands[type][conditionKey]) {
      throw new Error(`command ${commands[type][conditionKey]} does not exist`);
    }

    const command = commands[type][conditionKey];
    // TODO parse string to obj
    return await command(args);
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
