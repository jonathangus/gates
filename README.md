# Web3 fullstack starter

My ideal monorepo setup for working with fullstack web3 development. Can be used for quick prototyping or built on top on for production ready projects.

### Core packages
- `ethers`
- `wagmi`
- `hardhat`
- `next.js`
- `typechain`

### Features?
- built on top of wagmi (❤️) with recognisable api
- write and read hooks are typesafe
- sync deployments to frontend so you dont manually have to update addresses
- no theming or css 


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

## Setup
Install dependencies by running `yarn`

### Development
To run local development run:
```
yarn dev
```

### Build

To build all apps and packages, run the following command:

```
yarn build
```
