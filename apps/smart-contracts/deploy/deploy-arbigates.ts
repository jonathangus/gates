import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const name = 'ArbiGates';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  const deployment = await deploy(name, {
    from: deployer,
    args: [
      4,
      'https://gateway.pinata.cloud/ipfs/QmfK4jMsx5qZ3fBiixfYawRQsrCGrGjgMXKbYzkovF7Qwg/',
      60 * 1000 * 1,
    ],
  });

  deployments.log(`Contract ${name} deployed at ${deployment.address}`);
};

export default func;

func.tags = [name];
