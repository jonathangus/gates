import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const name = 'Counter';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  const deployment = await deploy(name, {
    from: deployer,
    args: [],
  });

  deployments.log(`Contract ${name} deployed at ${deployment.address}`);
};

export default func;

func.tags = [name];
