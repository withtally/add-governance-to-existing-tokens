/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Timelock, TimelockInterface } from "../../contracts/Timelock";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "CallExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "CallScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "Cancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "MinDelayChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "CANCELLER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXECUTOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROPOSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIMELOCK_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperation",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperationBatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minDelay",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "_proposers",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_executors",
        type: "address[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperation",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationDone",
    outputs: [
      {
        internalType: "bool",
        name: "done",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationPending",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationReady",
    outputs: [
      {
        internalType: "bool",
        name: "ready",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "schedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "scheduleBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "updateDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506200001c62000022565b62000152565b6200002e60ff62000031565b50565b60008054610100900460ff1615620000ca578160ff1660011480156200006a575062000068306200014360201b62000f9b1760201c565b155b620000c25760405162461bcd60e51b815260206004820152602e60248201526000805160206200280783398151915260448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b506000919050565b60005460ff808416911610620001295760405162461bcd60e51b815260206004820152602e60248201526000805160206200280783398151915260448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401620000b9565b506000805460ff191660ff92909216919091179055600190565b6001600160a01b03163b151590565b6126a580620001626000396000f3fe6080604052600436106101c65760003560e01c80637fbc79c6116100f7578063b1c5f42711610095578063d547741f11610064578063d547741f146105d2578063e38335e5146105f2578063f23a6e6114610605578063f27a0c921461063157600080fd5b8063b1c5f42714610539578063bc197c8114610559578063c4d252f514610585578063d45c4435146105a557600080fd5b80638f61f4f5116100d15780638f61f4f51461047657806391d14854146104aa578063a217fddf146104f0578063b08e51c01461050557600080fd5b80637fbc79c6146104165780638065657f146104365780638f2a0bb01461045657600080fd5b8063248a9ca31161016457806331d507501161013e57806331d507501461039657806336568abe146103b6578063584b153e146103d657806364d62353146103f657600080fd5b8063248a9ca3146103165780632ab0f529146103465780632f2ff15d1461037657600080fd5b80630d3cf6fc116101a05780630d3cf6fc1461026b578063134008d31461029f57806313bc9f20146102b2578063150b7a02146102d257600080fd5b806301d5062a146101d257806301ffc9a7146101f457806307bd02651461022957600080fd5b366101cd57005b600080fd5b3480156101de57600080fd5b506101f26101ed366004611ff9565b610646565b005b34801561020057600080fd5b5061021461020f366004612202565b6106db565b60405190151581526020015b60405180910390f35b34801561023557600080fd5b5061025d7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6381565b604051908152602001610220565b34801561027757600080fd5b5061025d7f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca581565b6101f26102ad366004611f8f565b610706565b3480156102be57600080fd5b506102146102cd3660046121bf565b6107c1565b3480156102de57600080fd5b506102fd6102ed366004611ec6565b630a85bd0160e11b949350505050565b6040516001600160e01b03199091168152602001610220565b34801561032257600080fd5b5061025d6103313660046121bf565b60009081526065602052604090206001015490565b34801561035257600080fd5b506102146103613660046121bf565b60009081526097602052604090205460011490565b34801561038257600080fd5b506101f26103913660046121d7565b6107e7565b3480156103a257600080fd5b506102146103b13660046121bf565b610811565b3480156103c257600080fd5b506101f26103d13660046121d7565b61082a565b3480156103e257600080fd5b506102146103f13660046121bf565b6108bb565b34801561040257600080fd5b506101f26104113660046121bf565b6108d2565b34801561042257600080fd5b506101f261043136600461222a565b610988565b34801561044257600080fd5b5061025d610451366004611f8f565b610a03565b34801561046257600080fd5b506101f2610471366004612111565b610a42565b34801561048257600080fd5b5061025d7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc181565b3480156104b657600080fd5b506102146104c53660046121d7565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b3480156104fc57600080fd5b5061025d600081565b34801561051157600080fd5b5061025d7ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f78381565b34801561054557600080fd5b5061025d61055436600461206c565b610c36565b34801561056557600080fd5b506102fd610574366004611e20565b63bc197c8160e01b95945050505050565b34801561059157600080fd5b506101f26105a03660046121bf565b610c7b565b3480156105b157600080fd5b5061025d6105c03660046121bf565b60009081526097602052604090205490565b3480156105de57600080fd5b506101f26105ed3660046121d7565b610d5c565b6101f261060036600461206c565b610d81565b34801561061157600080fd5b506102fd610620366004611f2c565b63f23a6e6160e01b95945050505050565b34801561063d57600080fd5b5060985461025d565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc161067081610faa565b6000610680898989898989610a03565b905061068c8184610fb7565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a6040516106c89695949392919061240e565b60405180910390a3505050505050505050565b60006001600160e01b03198216630271189760e51b14806107005750610700826110cb565b92915050565b600080527f7dc9f88e569f94faad6fa0d44dd44858caf3f34f1bd1c985800aedf5793aad8b6020527fa01e231ca478cf51f663e103939e98de36fa76d3e4e0b1de673dc711acc3a01b547fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff16610783576107838133611100565b6000610793888888888888610a03565b905061079f8185611180565b6107ae8160008a8a8a8a611275565b6107b781611393565b5050505050505050565b6000818152609760205260408120546001811180156107e05750428111155b9392505050565b60008281526065602052604090206001015461080281610faa565b61080c838361140f565b505050565b60008181526097602052604081205481905b1192915050565b6001600160a01b03811633146108ad5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6108b782826114b1565b5050565b600081815260976020526040812054600190610823565b3330146109475760405162461bcd60e51b815260206004820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201527f62652074696d656c6f636b00000000000000000000000000000000000000000060648201526084016108a4565b60985460408051918252602082018390527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1609855565b60006109946001611534565b905080156109ac576000805461ff0019166101001790555b6109b784848461164f565b80156109fd576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050565b6000868686868686604051602001610a209695949392919061240e565b6040516020818303038152906040528051906020012090509695505050505050565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1610a6c81610faa565b888714610ac75760405162461bcd60e51b815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616044820152620e8c6d60eb1b60648201526084016108a4565b888514610b225760405162461bcd60e51b815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616044820152620e8c6d60eb1b60648201526084016108a4565b6000610b348b8b8b8b8b8b8b8b610c36565b9050610b408184610fb7565b60005b8a811015610c285780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e85818110610b8e57634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610ba39190611e06565b8d8d86818110610bc357634e487b7160e01b600052603260045260246000fd5b905060200201358c8c87818110610bea57634e487b7160e01b600052603260045260246000fd5b9050602002810190610bfc919061253d565b8c8b604051610c109695949392919061240e565b60405180910390a3610c2181612651565b9050610b43565b505050505050505050505050565b60008888888888888888604051602001610c5798979695949392919061244c565b60405160208183030381529060405280519060200120905098975050505050505050565b7ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783610ca581610faa565b610cae826108bb565b610d205760405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20636160448201527f6e6e6f742062652063616e63656c6c656400000000000000000000000000000060648201526084016108a4565b6000828152609760205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b600082815260656020526040902060010154610d7781610faa565b61080c83836114b1565b600080527f7dc9f88e569f94faad6fa0d44dd44858caf3f34f1bd1c985800aedf5793aad8b6020527fa01e231ca478cf51f663e103939e98de36fa76d3e4e0b1de673dc711acc3a01b547fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff16610dfe57610dfe8133611100565b878614610e595760405162461bcd60e51b815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616044820152620e8c6d60eb1b60648201526084016108a4565b878414610eb45760405162461bcd60e51b815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616044820152620e8c6d60eb1b60648201526084016108a4565b6000610ec68a8a8a8a8a8a8a8a610c36565b9050610ed28185611180565b60005b89811015610f8557610f7582828d8d85818110610f0257634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610f179190611e06565b8c8c86818110610f3757634e487b7160e01b600052603260045260246000fd5b905060200201358b8b87818110610f5e57634e487b7160e01b600052603260045260246000fd5b9050602002810190610f70919061253d565b611275565b610f7e81612651565b9050610ed5565b50610f8f81611393565b50505050505050505050565b6001600160a01b03163b151590565b610fb48133611100565b50565b610fc082610811565b156110335760405162461bcd60e51b815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201527f7265616479207363686564756c6564000000000000000000000000000000000060648201526084016108a4565b6098548110156110ab5760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e7460448201527f2064656c6179000000000000000000000000000000000000000000000000000060648201526084016108a4565b6110b581426125d7565b6000928352609760205260409092209190915550565b60006001600160e01b03198216637965db0b60e01b148061070057506301ffc9a760e01b6001600160e01b0319831614610700565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff166108b75761113e816001600160a01b031660146116c5565b6111498360206116c5565b60405160200161115a92919061235a565b60408051601f198184030181529082905262461bcd60e51b82526108a49160040161250a565b611189826107c1565b6111e85760405162461bcd60e51b815260206004820152602a60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e206973604482015269206e6f7420726561647960b01b60648201526084016108a4565b80158061120357506000818152609760205260409020546001145b6108b75760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e67206465706560448201527f6e64656e6379000000000000000000000000000000000000000000000000000060648201526084016108a4565b6000846001600160a01b031684848460405161129292919061234a565b60006040518083038185875af1925050503d80600081146112cf576040519150601f19603f3d011682016040523d82523d6000602084013e6112d4565b606091505b505090508061134b5760405162461bcd60e51b815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e67207460448201527f72616e73616374696f6e2072657665727465640000000000000000000000000060648201526084016108a4565b85877fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b588787878760405161138294939291906123db565b60405180910390a350505050505050565b61139c816107c1565b6113fb5760405162461bcd60e51b815260206004820152602a60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e206973604482015269206e6f7420726561647960b01b60648201526084016108a4565b600090815260976020526040902060019055565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff166108b75760008281526065602090815260408083206001600160a01b03851684529091529020805460ff1916600117905561146d3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526065602090815260408083206001600160a01b038516845290915290205460ff16156108b75760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60008054610100900460ff16156115c2578160ff1660011480156115575750303b155b6115ba5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016108a4565b506000919050565b60005460ff8084169116106116305760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016108a4565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff166116ba5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016108a4565b61080c8383836118b4565b606060006116d48360026125ef565b6116df9060026125d7565b67ffffffffffffffff81111561170557634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561172f576020820181803683370190505b509050600360fc1b8160008151811061175857634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061179557634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060006117b98460026125ef565b6117c49060016125d7565b90505b6001811115611865577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061181357634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061183757634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c9361185e8161263a565b90506117c7565b5083156107e05760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016108a4565b600054610100900460ff1661191f5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016108a4565b6119497f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca580611bd2565b6119937fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc17f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5611bd2565b6119dd7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e637f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5611bd2565b611a277ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f7837f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5611bd2565b611a517f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca533611c1d565b611a7b7f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca530611c1d565b60005b8251811015611b2c57611ad87fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1848381518110611acb57634e487b7160e01b600052603260045260246000fd5b6020026020010151611c1d565b611b1c7ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783848381518110611acb57634e487b7160e01b600052603260045260246000fd5b611b2581612651565b9050611a7e565b5060005b8151811015611b8d57611b7d7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63838381518110611acb57634e487b7160e01b600052603260045260246000fd5b611b8681612651565b9050611b30565b5060988390556040805160008152602081018590527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1505050565b600082815260656020526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b6108b7828261140f565b80356001600160a01b038116811461164a57600080fd5b60008083601f840112611c4f578182fd5b50813567ffffffffffffffff811115611c66578182fd5b6020830191508360208260051b8501011115611c8157600080fd5b9250929050565b600082601f830112611c98578081fd5b81356020611cad611ca8836125b3565b612582565b80838252828201915082860187848660051b8901011115611ccc578586fd5b855b85811015611cf157611cdf82611c27565b84529284019290840190600101611cce565b5090979650505050505050565b600082601f830112611d0e578081fd5b81356020611d1e611ca8836125b3565b80838252828201915082860187848660051b8901011115611d3d578586fd5b855b85811015611cf157813584529284019290840190600101611d3f565b60008083601f840112611d6c578182fd5b50813567ffffffffffffffff811115611d83578182fd5b602083019150836020828501011115611c8157600080fd5b600082601f830112611dab578081fd5b813567ffffffffffffffff811115611dc557611dc5612682565b611dd8601f8201601f1916602001612582565b818152846020838601011115611dec578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215611e17578081fd5b6107e082611c27565b600080600080600060a08688031215611e37578081fd5b611e4086611c27565b9450611e4e60208701611c27565b9350604086013567ffffffffffffffff80821115611e6a578283fd5b611e7689838a01611cfe565b94506060880135915080821115611e8b578283fd5b611e9789838a01611cfe565b93506080880135915080821115611eac578283fd5b50611eb988828901611d9b565b9150509295509295909350565b60008060008060808587031215611edb578384fd5b611ee485611c27565b9350611ef260208601611c27565b925060408501359150606085013567ffffffffffffffff811115611f14578182fd5b611f2087828801611d9b565b91505092959194509250565b600080600080600060a08688031215611f43578081fd5b611f4c86611c27565b9450611f5a60208701611c27565b93506040860135925060608601359150608086013567ffffffffffffffff811115611f83578182fd5b611eb988828901611d9b565b60008060008060008060a08789031215611fa7578081fd5b611fb087611c27565b955060208701359450604087013567ffffffffffffffff811115611fd2578182fd5b611fde89828a01611d5b565b979a9699509760608101359660809091013595509350505050565b600080600080600080600060c0888a031215612013578081fd5b61201c88611c27565b965060208801359550604088013567ffffffffffffffff81111561203e578182fd5b61204a8a828b01611d5b565b989b979a50986060810135976080820135975060a09091013595509350505050565b60008060008060008060008060a0898b031215612087578182fd5b883567ffffffffffffffff8082111561209e578384fd5b6120aa8c838d01611c3e565b909a50985060208b01359150808211156120c2578384fd5b6120ce8c838d01611c3e565b909850965060408b01359150808211156120e6578384fd5b506120f38b828c01611c3e565b999c989b509699959896976060870135966080013595509350505050565b600080600080600080600080600060c08a8c03121561212e578283fd5b893567ffffffffffffffff80821115612145578485fd5b6121518d838e01611c3e565b909b50995060208c0135915080821115612169578485fd5b6121758d838e01611c3e565b909950975060408c013591508082111561218d578485fd5b5061219a8c828d01611c3e565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b6000602082840312156121d0578081fd5b5035919050565b600080604083850312156121e9578182fd5b823591506121f960208401611c27565b90509250929050565b600060208284031215612213578081fd5b81356001600160e01b0319811681146107e0578182fd5b60008060006060848603121561223e578081fd5b83359250602084013567ffffffffffffffff8082111561225c578283fd5b61226887838801611c88565b9350604086013591508082111561227d578283fd5b5061228a86828701611c88565b9150509250925092565b81835260006020808501808196508560051b8101915084845b878110156123145782840389528135601e198836030181126122cd578687fd5b8701803567ffffffffffffffff8111156122e5578788fd5b8036038913156122f3578788fd5b6123008682898501612321565b9a87019a95505050908401906001016122ad565b5091979650505050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b8183823760009101908152919050565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161239281601785016020880161260e565b7f206973206d697373696e6720726f6c652000000000000000000000000000000060179184019182015283516123cf81602884016020880161260e565b01602801949350505050565b6001600160a01b0385168152836020820152606060408201526000612404606083018486612321565b9695505050505050565b6001600160a01b038716815285602082015260a06040820152600061243760a083018688612321565b60608301949094525060800152949350505050565b60a0808252810188905260008960c08301825b8b81101561248d576001600160a01b0361247884611c27565b1682526020928301929091019060010161245f565b5083810360208501528881527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8911156124c5578283fd5b8860051b9150818a602083013701602081810183815284830390910160408501526124f181888a612294565b6060850196909652505050608001529695505050505050565b602081526000825180602084015261252981604085016020870161260e565b601f01601f19169190910160400192915050565b6000808335601e19843603018112612553578283fd5b83018035915067ffffffffffffffff82111561256d578283fd5b602001915036819003821315611c8157600080fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156125ab576125ab612682565b604052919050565b600067ffffffffffffffff8211156125cd576125cd612682565b5060051b60200190565b600082198211156125ea576125ea61266c565b500190565b60008160001904831182151516156126095761260961266c565b500290565b60005b83811015612629578181015183820152602001612611565b838111156109fd5750506000910152565b6000816126495761264961266c565b506000190190565b60006000198214156126655761266561266c565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea164736f6c6343000804000a496e697469616c697a61626c653a20636f6e747261637420697320616c726561";

type TimelockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimelockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Timelock__factory extends ContractFactory {
  constructor(...args: TimelockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Timelock> {
    return super.deploy(overrides || {}) as Promise<Timelock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Timelock {
    return super.attach(address) as Timelock;
  }
  override connect(signer: Signer): Timelock__factory {
    return super.connect(signer) as Timelock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockInterface {
    return new utils.Interface(_abi) as TimelockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Timelock {
    return new Contract(address, _abi, signerOrProvider) as Timelock;
  }
}