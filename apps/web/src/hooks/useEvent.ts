import { Contract } from '@ethersproject/contracts';
import { useState } from 'react';
import { useContractEvent } from 'wagmi';

import { ContractFactory, ContractInstance } from '../config/types';
import useAddress from './useAddress';

function useEvent<T extends ContractInstance = Contract>(
  typechainFactory: ContractFactory<T>,
  eventName: string,
  options?: {
    args?: any[];
    enabled?: boolean;
    address?: string;
    onChange?: (data: any) => void;
  }
) {
  const predefinedAddress = useAddress(typechainFactory);
  const [data, setResult] = useState([]);
  const address = options?.address || predefinedAddress;

  useContractEvent({
    addressOrName: address,
    contractInterface: typechainFactory.abi,
    eventName: eventName as string,
    listener: (event) => {
      if (options?.args) {
        const isMatch = event.every((prop, i) => {
          if (!options.args[i]) {
            return true;
          }

          return prop === options.args[i];
        });

        if (!isMatch) {
          return;
        }
      }

      setResult((prev) => [...prev, event]);
      if (options?.onChange) {
        options.onChange(event);
      }
    },
  });

  return {
    data,
  };
}

export default useEvent;
