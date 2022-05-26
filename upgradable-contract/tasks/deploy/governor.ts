import fs from "fs-extra";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import { Governor, NewToken, Timelock } from "../../src/types/contracts";
import { Governor__factory, NewToken__factory, Timelock__factory } from "../../src/types/factories/contracts";

task("deploy:Governance").setAction(async function (_: TaskArguments, { ethers, upgrades, run }) {
  // token deployment
  const Token: NewToken__factory = await ethers.getContractFactory("NewToken");
  const tokenProxy: NewToken = <NewToken>await upgrades.deployProxy(Token, []);
  await tokenProxy.deployed();
  const tokenImplementationAddress = await upgrades.erc1967.getImplementationAddress(tokenProxy.address);

  // timelock deployment
  const Timelock: Timelock__factory = await ethers.getContractFactory("Timelock");
  const timelockProxy: Timelock = <Timelock>(
    await upgrades.deployProxy(Timelock, [0, [ethers.constants.AddressZero], [ethers.constants.AddressZero]])
  );
  await timelockProxy.deployed();
  const timelockImplementationAddress = await upgrades.erc1967.getImplementationAddress(timelockProxy.address);

  // governor deployment
  const Governor: Governor__factory = await ethers.getContractFactory("Governor");
  const governorProxy: Governor = <Governor>(
    await upgrades.deployProxy(Governor, [tokenProxy.address, timelockProxy.address])
  );
  await governorProxy.deployed();
  const governorImplementationAddress = await upgrades.erc1967.getImplementationAddress(governorProxy.address);

  // get timelock roles
  const timelockExecuterRole = await timelockProxy.EXECUTOR_ROLE();
  const timelockProposerRole = await timelockProxy.PROPOSER_ROLE();
  const timelockCancellerRole = await timelockProxy.CANCELLER_ROLE();

  // grant timelock roles to governor contract
  await timelockProxy.grantRole(timelockExecuterRole, governorProxy.address);
  await timelockProxy.grantRole(timelockProposerRole, governorProxy.address);
  await timelockProxy.grantRole(timelockCancellerRole, governorProxy.address);

  // write to local
  const data = {
    token: { proxy: tokenProxy.address, implementation: tokenImplementationAddress },
    timelock: { proxy: timelockProxy.address, implementation: timelockImplementationAddress },
    governance: { proxy: governorProxy.address, implementation: governorImplementationAddress },
  };

  saveJSON(data, "./addresses.json");

  // etherscan verification
  await run("verify:verify", {
    address: tokenImplementationAddress,
  });

  await run("verify:verify", {
    address: timelockImplementationAddress,
  });

  await run("verify:verify", {
    address: governorImplementationAddress,
    constructorArguments: [tokenProxy.address, timelockProxy.address],
  });
});

const saveJSON = (data: any, path: string) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data));
    console.log(`Object stored on directory: ${path}`);
  } catch (err) {
    console.error(err);
  }
};
