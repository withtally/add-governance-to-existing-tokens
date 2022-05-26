/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NewToken, NewTokenInterface } from "../../contracts/NewToken";

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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
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
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "pos",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "fromBlock",
            type: "uint32",
          },
          {
            internalType: "uint224",
            name: "votes",
            type: "uint224",
          },
        ],
        internalType: "struct ERC20VotesUpgradeable.Checkpoint",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "delegates",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastTotalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50600062000020600162000087565b9050801562000039576000805461ff0019166101001790555b801562000080576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50620001a8565b60008054610100900460ff161562000120578160ff166001148015620000c05750620000be306200019960201b62000dd31760201c565b155b620001185760405162461bcd60e51b815260206004820152602e60248201526000805160206200279783398151915260448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b506000919050565b60005460ff8084169116106200017f5760405162461bcd60e51b815260206004820152602e60248201526000805160206200279783398151915260448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016200010f565b506000805460ff191660ff92909216919091179055600190565b6001600160a01b03163b151590565b6125df80620001b86000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c8063715018a6116100f9578063a457c2d711610097578063d505accf11610071578063d505accf146103b9578063dd62ed3e146103cc578063f1127ed814610405578063f2fde38b1461044257600080fd5b8063a457c2d714610380578063a9059cbb14610393578063c3cda520146103a657600080fd5b80638da5cb5b116100d35780638da5cb5b146103415780638e539e8c1461035257806395d89b41146103655780639ab24eb01461036d57600080fd5b8063715018a61461031e5780637ecebe00146103265780638129fc1c1461033957600080fd5b80633950935111610166578063587cde1e11610140578063587cde1e146102765780635c19a95c146102ba5780636fcfff45146102cd57806370a08231146102f557600080fd5b8063395093511461023b5780633a46b1a81461024e57806340c10f191461026157600080fd5b806323b872dd1161019757806323b872dd14610211578063313ce567146102245780633644e5151461023357600080fd5b806306fdde03146101be578063095ea7b3146101dc57806318160ddd146101ff575b600080fd5b6101c6610455565b6040516101d391906123d8565b60405180910390f35b6101ef6101ea366004612302565b6104e7565b60405190151581526020016101d3565b6035545b6040519081526020016101d3565b6101ef61021f36600461225e565b610501565b604051601281526020016101d3565b610203610525565b6101ef610249366004612302565b610534565b61020361025c366004612302565b610573565b61027461026f366004612302565b6105f2565b005b6102a2610284366004612212565b6001600160a01b03908116600090815260fe60205260409020541690565b6040516001600160a01b0390911681526020016101d3565b6102746102c8366004612212565b61065a565b6102e06102db366004612212565b610667565b60405163ffffffff90911681526020016101d3565b610203610303366004612212565b6001600160a01b031660009081526033602052604090205490565b610274610689565b610203610334366004612212565b6106ef565b61027461070d565b6065546001600160a01b03166102a2565b6102036103603660046123c0565b61080f565b6101c661086c565b61020361037b366004612212565b61087b565b6101ef61038e366004612302565b610910565b6101ef6103a1366004612302565b6109ba565b6102746103b436600461232b565b6109c8565b6102746103c7366004612299565b610afe565b6102036103da36600461222c565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b610418610413366004612382565b610c62565b60408051825163ffffffff1681526020928301516001600160e01b031692810192909252016101d3565b610274610450366004612212565b610cf4565b60606036805461046490612587565b80601f016020809104026020016040519081016040528092919081815260200182805461049090612587565b80156104dd5780601f106104b2576101008083540402835291602001916104dd565b820191906000526020600020905b8154815290600101906020018083116104c057829003601f168201915b5050505050905090565b6000336104f5818585610de2565b60019150505b92915050565b60003361050f858285610f06565b61051a858585610f98565b506001949350505050565b600061052f61119b565b905090565b3360008181526034602090815260408083206001600160a01b03871684529091528120549091906104f5908290869061056e90879061242b565b610de2565b60004382106105c95760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e65640060448201526064015b60405180910390fd5b6001600160a01b038316600090815260ff602052604090206105eb9083611216565b9392505050565b6065546001600160a01b0316331461064c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105c0565b61065682826112ef565b5050565b61066433826112f9565b50565b6001600160a01b038116600090815260ff60205260408120546104fb90611380565b6065546001600160a01b031633146106e35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105c0565b6106ed6000611400565b565b6001600160a01b038116600090815260cb60205260408120546104fb565b6000610719600161145f565b90508015610731576000805461ff0019166101001790555b610776604051806040016040528060088152602001672732bbaa37b5b2b760c11b815250604051806040016040528060038152602001624e544b60e81b81525061157a565b61077e6115ef565b6107a7604051806040016040528060088152602001672732bbaa37b5b2b760c11b815250611662565b6107c7336107b76012600a6124a6565b6107c2906014612551565b6112ef565b8015610664576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b60004382106108605760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e65640060448201526064016105c0565b6104fb61010083611216565b60606037805461046490612587565b6001600160a01b038116600090815260ff602052604081205480156108fd576001600160a01b038316600090815260ff602052604090206108bd600183612570565b815481106108db57634e487b7160e01b600052603260045260246000fd5b60009182526020909120015464010000000090046001600160e01b0316610900565b60005b6001600160e01b03169392505050565b3360008181526034602090815260408083206001600160a01b0387168452909152812054909190838110156109ad5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016105c0565b61051a8286868403610de2565b6000336104f5818585610f98565b83421115610a185760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a207369676e6174757265206578706972656400000060448201526064016105c0565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b038816918101919091526060810186905260808101859052600090610a9290610a8a9060a001604051602081830303815290604052805190602001206116f0565b85858561173e565b9050610a9d81611766565b8614610aeb5760405162461bcd60e51b815260206004820152601960248201527f4552433230566f7465733a20696e76616c6964206e6f6e63650000000000000060448201526064016105c0565b610af581886112f9565b50505050505050565b83421115610b4e5760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016105c0565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610b7d8c611766565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610bd8826116f0565b90506000610be88287878761173e565b9050896001600160a01b0316816001600160a01b031614610c4b5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016105c0565b610c568a8a8a610de2565b50505050505050505050565b60408051808201909152600080825260208201526001600160a01b038316600090815260ff60205260409020805463ffffffff8416908110610cb457634e487b7160e01b600052603260045260246000fd5b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090046001600160e01b0316918101919091529392505050565b6065546001600160a01b03163314610d4e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105c0565b6001600160a01b038116610dca5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016105c0565b61066481611400565b6001600160a01b03163b151590565b6001600160a01b038316610e445760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016105c0565b6001600160a01b038216610ea55760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016105c0565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381166000908152603460209081526040808320938616835292905220546000198114610f925781811015610f855760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016105c0565b610f928484848403610de2565b50505050565b6001600160a01b0383166110145760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016105c0565b6001600160a01b0382166110765760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016105c0565b6001600160a01b038316600090815260336020526040902054818110156111055760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016105c0565b6001600160a01b0380851660009081526033602052604080822085850390559185168152908120805484929061113c90849061242b565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161118891815260200190565b60405180910390a3610f92848484611793565b600061052f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6111ca60975490565b6098546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b8154600090815b81811015611288576000611231828461179e565b90508486828154811061125457634e487b7160e01b600052603260045260246000fd5b60009182526020909120015463ffffffff16111561127457809250611282565b61127f81600161242b565b91505b5061121d565b81156112da578461129a600184612570565b815481106112b857634e487b7160e01b600052603260045260246000fd5b60009182526020909120015464010000000090046001600160e01b03166112dd565b60005b6001600160e01b031695945050505050565b61065682826117b9565b6001600160a01b03828116600081815260fe60208181526040808420805460338452828620549490935287871673ffffffffffffffffffffffffffffffffffffffff198416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4610f92828483611851565b600063ffffffff8211156113fc5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201527f322062697473000000000000000000000000000000000000000000000000000060648201526084016105c0565b5090565b606580546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60008054610100900460ff16156114ed578160ff1660011480156114825750303b155b6114e55760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016105c0565b506000919050565b60005460ff80841691161061155b5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016105c0565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff166115e55760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016105c0565b610656828261198e565b600054610100900460ff1661165a5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016105c0565b6106ed611a20565b600054610100900460ff166116cd5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016105c0565b61066481604051806040016040528060018152602001603160f81b815250611a94565b60006104fb6116fd61119b565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080600061174f87878787611b19565b9150915061175c81611c06565b5095945050505050565b6001600160a01b038116600090815260cb602052604090208054600181018255905b50919050565b505050565b61178e838383611e07565b60006117ad6002848418612443565b6105eb9084841661242b565b6117c38282611e39565b6035546001600160e01b0310156118425760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201527f766572666c6f77696e6720766f7465730000000000000000000000000000000060648201526084016105c0565b610f92610100611f2083611f2c565b816001600160a01b0316836001600160a01b0316141580156118735750600081115b1561178e576001600160a01b03831615611901576001600160a01b038316600090815260ff6020526040812081906118ae906120cf85611f2c565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72483836040516118f6929190918252602082015260400190565b60405180910390a250505b6001600160a01b0382161561178e576001600160a01b038216600090815260ff60205260408120819061193790611f2085611f2c565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724838360405161197f929190918252602082015260400190565b60405180910390a25050505050565b600054610100900460ff166119f95760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016105c0565b8151611a0c90603690602085019061215a565b50805161178e90603790602084019061215a565b600054610100900460ff16611a8b5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016105c0565b6106ed33611400565b600054610100900460ff16611aff5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016105c0565b815160209283012081519190920120609791909155609855565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611b505750600090506003611bfd565b8460ff16601b14158015611b6857508460ff16601c14155b15611b795750600090506004611bfd565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611bcd573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611bf657600060019250925050611bfd565b9150600090505b94509492505050565b6000816004811115611c2857634e487b7160e01b600052602160045260246000fd5b1415611c315750565b6001816004811115611c5357634e487b7160e01b600052602160045260246000fd5b1415611ca15760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016105c0565b6002816004811115611cc357634e487b7160e01b600052602160045260246000fd5b1415611d115760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016105c0565b6003816004811115611d3357634e487b7160e01b600052602160045260246000fd5b1415611d8c5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016105c0565b6004816004811115611dae57634e487b7160e01b600052602160045260246000fd5b14156106645760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016105c0565b6001600160a01b03838116600090815260fe602052604080822054858416835291205461178e92918216911683611851565b6001600160a01b038216611e8f5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016105c0565b8060356000828254611ea1919061242b565b90915550506001600160a01b03821660009081526033602052604081208054839290611ece90849061242b565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a361065660008383611793565b60006105eb828461242b565b825460009081908015611f855785611f45600183612570565b81548110611f6357634e487b7160e01b600052603260045260246000fd5b60009182526020909120015464010000000090046001600160e01b0316611f88565b60005b6001600160e01b03169250611fa183858763ffffffff16565b9150600081118015611fed57504386611fbb600184612570565b81548110611fd957634e487b7160e01b600052603260045260246000fd5b60009182526020909120015463ffffffff16145b1561205b57611ffb826120db565b86612007600184612570565b8154811061202557634e487b7160e01b600052603260045260246000fd5b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b031602179055506120c6565b85604051806040016040528061207043611380565b63ffffffff168152602001612084856120db565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b50935093915050565b60006105eb8284612570565b60006001600160e01b038211156113fc5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203260448201527f323420626974730000000000000000000000000000000000000000000000000060648201526084016105c0565b82805461216690612587565b90600052602060002090601f01602090048101928261218857600085556121ce565b82601f106121a157805160ff19168380011785556121ce565b828001600101855582156121ce579182015b828111156121ce5782518255916020019190600101906121b3565b506113fc9291505b808211156113fc57600081556001016121d6565b80356001600160a01b038116811461157557600080fd5b803560ff8116811461157557600080fd5b600060208284031215612223578081fd5b6105eb826121ea565b6000806040838503121561223e578081fd5b612247836121ea565b9150612255602084016121ea565b90509250929050565b600080600060608486031215612272578081fd5b61227b846121ea565b9250612289602085016121ea565b9150604084013590509250925092565b600080600080600080600060e0888a0312156122b3578283fd5b6122bc886121ea565b96506122ca602089016121ea565b955060408801359450606088013593506122e660808901612201565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215612314578182fd5b61231d836121ea565b946020939093013593505050565b60008060008060008060c08789031215612343578182fd5b61234c876121ea565b9550602087013594506040870135935061236860608801612201565b92506080870135915060a087013590509295509295509295565b60008060408385031215612394578182fd5b61239d836121ea565b9150602083013563ffffffff811681146123b5578182fd5b809150509250929050565b6000602082840312156123d1578081fd5b5035919050565b6000602080835283518082850152825b81811015612404578581018301518582016040015282016123e8565b818111156124155783604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561243e5761243e6125bc565b500190565b60008261245e57634e487b7160e01b81526012600452602481fd5b500490565b600181815b8085111561249e578160001904821115612484576124846125bc565b8085161561249157918102915b93841c9390800290612468565b509250929050565b60006105eb60ff8416836000826124bf575060016104fb565b816124cc575060006104fb565b81600181146124e257600281146124ec57612508565b60019150506104fb565b60ff8411156124fd576124fd6125bc565b50506001821b6104fb565b5060208310610133831016604e8410600b841016171561252b575081810a6104fb565b6125358383612463565b8060001904821115612549576125496125bc565b029392505050565b600081600019048311821515161561256b5761256b6125bc565b500290565b600082821015612582576125826125bc565b500390565b600181811c9082168061259b57607f821691505b6020821081141561178857634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fdfea164736f6c6343000804000a496e697469616c697a61626c653a20636f6e747261637420697320616c726561";

type NewTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NewTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NewToken__factory extends ContractFactory {
  constructor(...args: NewTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NewToken> {
    return super.deploy(overrides || {}) as Promise<NewToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NewToken {
    return super.attach(address) as NewToken;
  }
  override connect(signer: Signer): NewToken__factory {
    return super.connect(signer) as NewToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NewTokenInterface {
    return new utils.Interface(_abi) as NewTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NewToken {
    return new Contract(address, _abi, signerOrProvider) as NewToken;
  }
}