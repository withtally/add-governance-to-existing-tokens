import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "ethers";
import fs from "fs-extra";

export const getExpectedContractAddress = async (deployer: SignerWithAddress, actionsAfter: number) => {
  const adminAddressTransactionCount = await deployer.getTransactionCount();

  const expectedContractAddress = ethers.utils.getContractAddress({
    from: deployer.address,
    nonce: adminAddressTransactionCount + actionsAfter,
  });

  return expectedContractAddress;
};

export const saveJSON = (data: any, path: string) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data));
    console.log(`Object stored on directory: ${path}`);
  } catch (err) {
    console.error(err);
  }
};

export const getCurrentProxy = () => {
  try {
    const data = fs.readFileSync("./oldTokenAddress.json", "utf8");
    const jsonData = JSON.parse(data);

    return jsonData.token.proxy;
  } catch (err) {
    console.error(err);
  }
};
