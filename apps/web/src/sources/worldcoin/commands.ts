import { CommandContext } from '../../types';
import * as jose from 'jose';

export const verifyJWT = async (ctx: CommandContext): Promise<boolean> => {
  try {
    const token = ctx.userData.twitterToken; // hack, this is actually worldcoin jwt.
    const jsonKeys = await (
      await fetch('https://developer.worldcoin.org/api/v1/jwks')
    ).json();
    const kid = jose.decodeProtectedHeader(token).kid;
    const jsonKey = jsonKeys.keys.find((key) => key.kid === kid);
    const publicKey = await jose.importJWK(jsonKey, 'PS256');
    const { payload } = await jose.jwtVerify(token, publicKey, {
      issuer: 'https://developer.worldcoin.org',
    });
    return payload.verified as boolean;
  } catch (e) {
    return false;
  }
};
