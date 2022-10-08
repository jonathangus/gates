import { serveEncodedDefinition } from '@composedb/devtools-node';
import { DID } from 'dids';
import { Ed25519Provider } from 'key-did-provider-ed25519';
import { getResolver } from 'key-did-resolver';
import { fromString } from 'uint8arrays/from-string';
import { ethers } from 'ethers';

const privateKey = fromString(
  'b71f9960231e9484ed1657d1267b9906eef63d2bc6004c32905475ffb8464921',
  'hex'
);

// key = b71f9960231e9484ed1657d1267b9906eef63d2bc6004c32905475ffb8464921
// did:key:z6Mkma2AX7YJBeQeQVD8vZrs5iozM1Rx8U9LZXUgXDSb6zdJ
// Hexadecimal-encoded private key for a DID having admin access to the target Ceramic node
// Replace the example key here by your admin private key

const did = new DID({
  resolver: getResolver(),
  provider: new Ed25519Provider(privateKey),
});

const server = await serveEncodedDefinition({
  ceramicURL: 'http://0.0.0.0:7007',
  graphiql: true,
  path: new URL('../gates-composite.json', import.meta.url),
  port: 5001,
  did: did,
});

console.log(`Server started on ${server.url}`);

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Server stopped');
  });
});
