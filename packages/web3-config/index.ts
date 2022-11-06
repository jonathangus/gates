import goerliDeployment from './deployments/arbitrumGoerli/Gates.json';
import arbiGatesgoerliDeployment from './deployments/goerli/Arbigates.json';
import gatesgoerliDeployment from './deployments/goerli/Gates.json';

export * from './typechain';
import * as _typechain from './typechain';
import { chain } from 'wagmi';
import { Arbigates__factory } from './typechain/factories/Arbigates__factory';

import { Gates__factory } from './typechain';

export type AvailableContracts = any;

type AddressObj = Record<AvailableContracts, string>;

const _gates = new Gates__factory();
const _arbiGates = new Arbigates__factory();

export const Address: Record<number, AddressObj> = {
  [chain.arbitrumGoerli.id]: {
    [_gates.contractName]: goerliDeployment.address,
    [_arbiGates.contractName]: 'hej',
  },
  [chain.goerli.id]: {
    [_gates.contractName]: gatesgoerliDeployment.address,
    [_arbiGates.contractName]: arbiGatesgoerliDeployment.address,
  },
};

export const getAddress = (
  _chain: number,
  contract: AvailableContracts
): string => {
  if (Address[_chain]) {
    return Address[_chain][contract];
  }
  return Address[chain.arbitrumGoerli.id][contract];
};
