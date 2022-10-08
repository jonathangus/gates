import { SiweMessage } from 'siwe';

export const getMsg = (address: string) => {
  const domain = 'gate.xyz';
  const origin = 'https://gate.xyz';
  const statement =
    'I allow gates.wtf to read my data in a privacy friendly way';
  const siweMessage = new SiweMessage({
    domain,
    address,
    statement,
    uri: origin,
    version: '1',
    chainId: 1,
  });
  return siweMessage.prepareMessage();
};
