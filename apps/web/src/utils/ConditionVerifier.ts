import { sources } from '../sources';
import { CommandContext } from '../types';

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

  createRequest = async (
    condition: string,
    ctx: CommandContext
  ): Promise<boolean> => {
    const [type, conditionKey] = condition.split(':');
    const rest = condition
      .replace(`${type}:${conditionKey}`, '')
      .replace(':', '');

    console.log(condition);
    if (!sources[type]) {
      throw new Error(`type ${type} does not exist`);
    }

    const match = sources[type].conditions.find(
      (condition) => condition.key === conditionKey
    );

    if (!match) {
      throw new Error(`command ${[conditionKey]} does not exist`);
    }

    return await match.method(JSON.parse(rest), ctx);
  };

  verify = async (ctx: CommandContext): Promise<boolean> => {
    try {
      for (let condition of this.conditions) {
        let success = await this.createRequest(condition, ctx);

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
