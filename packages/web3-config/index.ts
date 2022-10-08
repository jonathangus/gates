import counterDeploymentRinkeby from './deployments/rinkeby/Counter.json';
import counterDeploymentLocalhost from './deployments/localhost/Counter.json';
export * from './typechain';
import * as _typechain from './typechain';
import { chain } from 'wagmi';

import { Counter__factory } from './typechain';

export const typechain = _typechain;

export type AvailableContracts = Counter__factory['contractName'];

type AddressObj = Record<AvailableContracts, string>;

const _counter = new Counter__factory();

export const Address: Record<number, AddressObj> = {
  [chain.localhost.id]: {
    [_counter.contractName]: counterDeploymentLocalhost.address,
  },
  [chain.rinkeby.id]: {
    [_counter.contractName]: counterDeploymentRinkeby.address,
  },
};

export const getAddress = (
  chain: number,
  contract: AvailableContracts
): string => Address[chain][contract];
