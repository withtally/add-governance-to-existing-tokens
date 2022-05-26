import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import { NewToken } from "../../src/types/contracts";
import { NewToken__factory } from "../../src/types/factories/contracts";
import { getTokenInfo, saveJSON } from "../../test/utils";

task("deploy:UpdateToken").setAction(async function (_: TaskArguments, { ethers, upgrades, run }) {
  // get current proxy address
  const oldToken = getTokenInfo("./oldTokenAddress.json");

  // token upgrade
  const UpgradedToken: NewToken__factory = await ethers.getContractFactory("NewToken");
  const upgraded: NewToken = <NewToken>await upgrades.upgradeProxy(oldToken.proxy, UpgradedToken);

  await upgraded.deployed();

  const tokenImplementationAddress = await upgrades.erc1967.getImplementationAddress(upgraded.address);

  // write to local
  const data = {
    token: { proxy: upgraded.address, implementation: tokenImplementationAddress },
  };

  saveJSON(data, "./newTokenAddress.json");

  // etherscan verification
  await run("verify:verify", {
    address: tokenImplementationAddress,
  });
});
