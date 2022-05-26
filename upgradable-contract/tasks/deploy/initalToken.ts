import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

import { OldToken } from "../../src/types/contracts";
import { OldToken__factory } from "../../src/types/factories/contracts";
import { saveJSON } from "../../test/utils";

task("deploy:InitialToken").setAction(async function (_: TaskArguments, { ethers, upgrades, run }) {
  // token deployment
  const Token: OldToken__factory = await ethers.getContractFactory("NewToken");
  const tokenProxy: OldToken = <OldToken>await upgrades.deployProxy(Token, []);
  await tokenProxy.deployed();
  const tokenImplementationAddress = await upgrades.erc1967.getImplementationAddress(tokenProxy.address);

  // write to local
  const data = {
    token: { proxy: tokenProxy.address, implementation: tokenImplementationAddress },
  };

  saveJSON(data, "./oldTokenAddress.json");

  // etherscan verification
  await run("verify:verify", {
    address: tokenImplementationAddress,
  });
});
