<a href="https://gates.wtf/">
  <img alt="gates.wtf" src="https://user-images.githubusercontent.com/34306844/194741838-79d8eda2-24d5-4190-98bb-4854923b6bdc.png" />
</a>

# Gates

**User verification using decentralised identity and custom conditions**

Gates enables dapps, metaverse games, and NFT projects to seamlessly verify users via custom conditions. We expand the concept of access management by combining on- and off-chain identities, arbitrary conditions, and increased customizability. As a result, managing access and creating a world of personalized experiences cross-contexts has never been easier.

- ✨ Straight-forward API to check user access without violating privacy
- ⛩ Easily customizable conditions
- 🫡 Built on top of [Next.js](https://nextjs.org) and [wagmi](https://github.com/tmm/wagmi)

## About

> Winner of 9 bounties (Optimism, ENS, The Graph, Ceramic, QuickNode, Worldcoin, Coinbase) at [ETH Bogotá 2022](https://ethglobal.com/showcase/gates-wtf-qy8w8).

To build Gates, we used Sign in with Ethereum and Ceramic to create a DID and let users store data connected to their identity. Since the data is on IPFS, we also encode it with a secret so only our server will be able to read from it and sensitive information is safe.

Furthermore, when reading the data from Ceramic, we decrypt it and only read the values on the server to determine if conditions are met.

The conditions that we create are supposed to be dynamic. Therefore, each condition is structured like 'service:method:args' that is converted to bytes and stored on-chain. With this structure, we can support any service we can think of.

When a user asks our API to verify, we decode the steps iterate through them, execute the connected method with our arguments and require all of them to pass. In the future, we are looking to implement OR/NAND/NOR. The API will only return a boolean to mimic a zkproof as much as possible.

To protect users’ data, we’re utilising DID (decentralised identities) for Ceramic where only the user own and can modify their (encrypted) data. Enjoy!

## Quick start

To run an example locally, install dependencies.

```bash
yarn install
```

Then go into the `web` directory.

```bash
cd web
```

Then run the dev script.

```bash
yarn dev
```

### Apps and Packages

- `web`: another [Next.js](https://nextjs.org) app
- `smart-contracts`: smart contracts with hardhat
- `web3-config`: deployments, generated types from contract and common web3 config
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting


## Contributions

Feel free to open an issue or a PR. More information and guidelines TBD.

## License

Licensed under the MIT License.
