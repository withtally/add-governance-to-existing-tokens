/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlUpgradeable__factory>;
    getContractFactory(
      name: "IAccessControlUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControlUpgradeable__factory>;
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "GovernorCountingSimpleUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorCountingSimpleUpgradeable__factory>;
    getContractFactory(
      name: "GovernorSettingsUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorSettingsUpgradeable__factory>;
    getContractFactory(
      name: "GovernorTimelockControlUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorTimelockControlUpgradeable__factory>;
    getContractFactory(
      name: "GovernorVotesQuorumFractionUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorVotesQuorumFractionUpgradeable__factory>;
    getContractFactory(
      name: "GovernorVotesUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorVotesUpgradeable__factory>;
    getContractFactory(
      name: "IGovernorTimelockUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernorTimelockUpgradeable__factory>;
    getContractFactory(
      name: "GovernorUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorUpgradeable__factory>;
    getContractFactory(
      name: "IGovernorUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernorUpgradeable__factory>;
    getContractFactory(
      name: "TimelockControllerUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimelockControllerUpgradeable__factory>;
    getContractFactory(
      name: "IVotesUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVotesUpgradeable__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "IERC1155ReceiverUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155ReceiverUpgradeable__factory>;
    getContractFactory(
      name: "ERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Upgradeable__factory>;
    getContractFactory(
      name: "ERC20PermitUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20PermitUpgradeable__factory>;
    getContractFactory(
      name: "IERC20PermitUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20PermitUpgradeable__factory>;
    getContractFactory(
      name: "ERC20VotesUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20VotesUpgradeable__factory>;
    getContractFactory(
      name: "IERC20MetadataUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20MetadataUpgradeable__factory>;
    getContractFactory(
      name: "IERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Upgradeable__factory>;
    getContractFactory(
      name: "IERC721ReceiverUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721ReceiverUpgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "EIP712Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EIP712Upgradeable__factory>;
    getContractFactory(
      name: "ERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165Upgradeable__factory>;
    getContractFactory(
      name: "IERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165Upgradeable__factory>;
    getContractFactory(
      name: "DoubleEndedQueueUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DoubleEndedQueueUpgradeable__factory>;
    getContractFactory(
      name: "Governor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Governor__factory>;
    getContractFactory(
      name: "NewToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NewToken__factory>;
    getContractFactory(
      name: "OldToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OldToken__factory>;
    getContractFactory(
      name: "Timelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Timelock__factory>;

    getContractAt(
      name: "AccessControlUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControlUpgradeable>;
    getContractAt(
      name: "IAccessControlUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControlUpgradeable>;
    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "GovernorCountingSimpleUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorCountingSimpleUpgradeable>;
    getContractAt(
      name: "GovernorSettingsUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorSettingsUpgradeable>;
    getContractAt(
      name: "GovernorTimelockControlUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorTimelockControlUpgradeable>;
    getContractAt(
      name: "GovernorVotesQuorumFractionUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorVotesQuorumFractionUpgradeable>;
    getContractAt(
      name: "GovernorVotesUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorVotesUpgradeable>;
    getContractAt(
      name: "IGovernorTimelockUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernorTimelockUpgradeable>;
    getContractAt(
      name: "GovernorUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorUpgradeable>;
    getContractAt(
      name: "IGovernorUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernorUpgradeable>;
    getContractAt(
      name: "TimelockControllerUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TimelockControllerUpgradeable>;
    getContractAt(
      name: "IVotesUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVotesUpgradeable>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "IERC1155ReceiverUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155ReceiverUpgradeable>;
    getContractAt(
      name: "ERC20Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Upgradeable>;
    getContractAt(
      name: "ERC20PermitUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20PermitUpgradeable>;
    getContractAt(
      name: "IERC20PermitUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20PermitUpgradeable>;
    getContractAt(
      name: "ERC20VotesUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20VotesUpgradeable>;
    getContractAt(
      name: "IERC20MetadataUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20MetadataUpgradeable>;
    getContractAt(
      name: "IERC20Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Upgradeable>;
    getContractAt(
      name: "IERC721ReceiverUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721ReceiverUpgradeable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "EIP712Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EIP712Upgradeable>;
    getContractAt(
      name: "ERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165Upgradeable>;
    getContractAt(
      name: "IERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165Upgradeable>;
    getContractAt(
      name: "DoubleEndedQueueUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DoubleEndedQueueUpgradeable>;
    getContractAt(
      name: "Governor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Governor>;
    getContractAt(
      name: "NewToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NewToken>;
    getContractAt(
      name: "OldToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OldToken>;
    getContractAt(
      name: "Timelock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Timelock>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}