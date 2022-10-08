import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

const SECRET = process.env.SECRET_ENCRYPTION_KEY;

export const encryptWithAES = (text: string, signature: string) => {
  const passphrase = SECRET + signature;

  return AES.encrypt(text, passphrase).toString();
};

export const decryptWithAES = (ciphertext: string, signature: string) => {
  const passphrase = SECRET + signature;

  const bytes = AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(Utf8);
  return originalText;
};
