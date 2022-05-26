import { task } from "hardhat/config";

import { NewNFTToken, Timelock } from "../../src/types/contracts";
import { MyGovernor } from "../../src/types/contracts/Governor.sol";
import { NewNFTToken__factory, Timelock__factory } from "../../src/types/factories/contracts";
import { MyGovernor__factory } from "../../src/types/factories/contracts/Governor.sol";

task("deploy:Governance").setAction(async function (_, { ethers, run }) {
  const timelockDelay = 2;

  const tokenFactory: NewNFTToken__factory = await ethers.getContractFactory("NewNFTToken");

  // replace with your existing token address
  const oldTokenAddress = ethers.constants.AddressZero; // old NFT token address

  const token: NewNFTToken = <NewNFTToken>await tokenFactory.deploy(oldTokenAddress);
  await token.deployed();

  // deploy timelock
  const timelockFactory: Timelock__factory = await ethers.getContractFactory("Timelock");
  const timelock: Timelock = <Timelock>(
    await timelockFactory.deploy(timelockDelay, [ethers.constants.AddressZero], [ethers.constants.AddressZero])
  );
  await timelock.deployed();

  // deploy governor
  const governorFactory: MyGovernor__factory = await ethers.getContractFactory("MyGovernor");
  const governor: MyGovernor = <MyGovernor>await governorFactory.deploy(token.address, timelock.address);
  await governor.deployed();

  // get timelock roles
  const timelockExecuterRole = await timelock.EXECUTOR_ROLE();
  const timelockProposerRole = await timelock.PROPOSER_ROLE();
  const timelockCancellerRole = await timelock.CANCELLER_ROLE();

  // grant timelock roles to governor contract
  await timelock.grantRole(timelockExecuterRole, governor.address);
  await timelock.grantRole(timelockProposerRole, governor.address);
  await timelock.grantRole(timelockCancellerRole, governor.address);

  console.log("Dao deployed to: ", {
    governor: governor.address,
    timelock: timelock.address,
    token: token.address,
  });

  // etherscan verification
  await run("verify:verify", {
    address: token.address,
    constructorArguments: [oldTokenAddress],
  });

  await run("verify:verify", {
    address: timelock.address,
    constructorArguments: [timelockDelay, [ethers.constants.AddressZero], [ethers.constants.AddressZero]],
    contract: "@openzeppelin/contracts/governance/TimelockController.sol:TimelockController",
  });

  await run("verify:verify", {
    address: governor.address,
    constructorArguments: [token.address, timelock.address],
  });
});
