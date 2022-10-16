import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'ethers';

const name = 'ArbiGates';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  const args = [
    4,
    'https://gateway.pinata.cloud/ipfs/QmfK4jMsx5qZ3fBiixfYawRQsrCGrGjgMXKbYzkovF7Qwg/',
    60 * 1000 * 1,
    '0x326C977E6efc84E512bB9C30f76E30c160eD06FB',
    '0xCC79157eb46F5624204f47AB42b3906cAA40eaB7',
  ];

  const deployment = await deploy(name, {
    from: deployer,
    args,
  });

  console.log(`
    npx hardhat verify ${deployment.address} ${args.map(
    (a) => `"${a}"`
  )} --network 
   `);

  await hre.run('verify', {
    address: deployment.address,

    constructorArgs: args,
  });
  deployments.log(`Contract ${name} deployed at ${deployment.address}`);
};

export default func;

func.tags = [name];
