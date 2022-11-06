import '@nomiclabs/hardhat-ethers';
import 'hardhat-deploy-ethers';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'hardhat-deploy';
import 'hardhat-abi-exporter';

import * as dotenv from 'dotenv';
import { HardhatUserConfig, task } from 'hardhat/config';

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const ALCHEMY_KEY = process.env.ALCHEMY_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const GOERLI_ALCHEMY_KEY = process.env.GOERLI_ALCHEMY_KEY;

console.log(PRIVATE_KEY);

const config: HardhatUserConfig = {
  solidity: '0.8.14',
  defaultNetwork: 'hardhat',

  networks: {
    hardhat: {
      chainId: 1337,
      mining: {
        auto: true,
        interval: 5000,
      },
    },
    arbitrum: {
      url: `https://arb-mainnet.g.alchemy.com/v2/QSbautzyEXXlmdo7LPpY4A0btktHukG0`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/QSbautzyEXXlmdo7LPpY4A0btktHukG0`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    arbitrumGoerli: {
      chainId: 421613,
      url: `https://arb-goerli.g.alchemy.com/v2/7GcqA0npWY1j3OPaPmrYAtv3nWrJxoNI`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
      saveDeployments: true,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  paths: {
    deployments: '../../packages/web3-config/deployments',
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  typechain: {
    outDir: '../../packages/web3-config/typechain',

    target: 'ethers-v5',
    alwaysGenerateOverloads: true,
  },

  abiExporter: {
    path: './abi',
    clear: true,
    flat: true,
    spacing: 2,
    runOnCompile: true,
  },
};

export default config;
