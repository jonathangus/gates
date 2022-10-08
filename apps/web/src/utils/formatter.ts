import Decimal from 'decimal.js';
import { BigNumber, ethers } from 'ethers';

Decimal.set({
  toExpNeg: -30,
  precision: 40,
});

type FormatOptions = {
  decimals?: number;
  maxBelowZeroDecimals?: number;
  maxDecimals?: number;
};

export const formatBigNumber = (
  value: BigNumber | string,
  config?: FormatOptions
): string => {
  const parsed = ethers.utils.formatUnits(value, config?.decimals || 18);
  const decimal = new Decimal(parsed);
  const decimals = config?.maxDecimals || 5;

  return decimal.toDecimalPlaces(decimals).toString();
};

export const formatBigNumberToDate = (value: BigNumber): string =>
  new Date(+value * 1000).toLocaleString();

export const formatAddressToShort = (
  address: string,
  options?: { start?: number; end?: number }
): string =>
  [
    address.slice(0, options?.start || 4),
    '...',
    address.slice(-(options?.end || 4)),
  ].join('');
