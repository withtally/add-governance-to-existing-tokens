/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NewNFTToken,
  NewNFTTokenInterface,
} from "../../contracts/NewNFTToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_oldNFTTokenAddress",
        type: "address",
      },
    ],
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [],
    name: "oldNFTToken",
    outputs: [
      {
        internalType: "contract IERC721",
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
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "stake",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101406040523480156200001257600080fd5b5060405162002c7738038062002c778339810160408190526200003591620002b7565b6040518060400160405280600b81526020016a2732bba7232a2a37b5b2b760a91b815250604051806040016040528060018152602001603160f81b8152506040518060400160405280600b81526020016a2732bba7232a2a37b5b2b760a91b815250604051806040016040528060048152602001634e4e544b60e01b8152508160009080519060200190620000cc92919062000211565b508051620000e290600190602084019062000211565b505050620000ff620000f9620001bb60201b60201c565b620001bf565b815160208084019190912082518383012060e08290526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81880181905281830187905260608201869052608082019490945230818401528151808203909301835260c00190528051940193909320919290916080523060601b60c052610120525050600b80546001600160a01b0319166001600160a01b03949094169390931790925550620003249050565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200021f90620002e7565b90600052602060002090601f0160209004810192826200024357600085556200028e565b82601f106200025e57805160ff19168380011785556200028e565b828001600101855582156200028e579182015b828111156200028e57825182559160200191906001019062000271565b506200029c929150620002a0565b5090565b5b808211156200029c5760008155600101620002a1565b600060208284031215620002c9578081fd5b81516001600160a01b0381168114620002e0578182fd5b9392505050565b600181811c90821680620002fc57607f821691505b602082108114156200031e57634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160601c60e051610100516101205161290062000377600039600061133f0152600061138e01526000611369015260006112c2015260006112ec0152600061131601526129006000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c8063715018a6116100f9578063a22cb46511610097578063c3cda52011610071578063c3cda52014610405578063c87b56dd14610418578063e985e9c51461042b578063f2fde38b1461046757600080fd5b8063a22cb465146103cc578063a694fc3a146103df578063b88d4fde146103f257600080fd5b80638da5cb5b116100d35780638da5cb5b1461038d5780638e539e8c1461039e57806395d89b41146103b15780639ab24eb0146103b957600080fd5b8063715018a6146103205780637636e245146103285780637ecebe001461037a57600080fd5b80633a46b1a8116101665780635c19a95c116101405780635c19a95c146102d457806363143e79146102e75780636352211e146102fa57806370a082311461030d57600080fd5b80633a46b1a81461028257806342842e0e14610295578063587cde1e146102a857600080fd5b8063095ea7b3116101a2578063095ea7b31461023157806323b872dd146102465780632e1a7d4d146102595780633644e5151461026c57600080fd5b806301ffc9a7146101c957806306fdde03146101f1578063081812fc14610206575b600080fd5b6101dc6101d73660046126ce565b61047a565b60405190151581526020015b60405180910390f35b6101f96104cc565b6040516101e891906127b5565b610219610214366004612706565b61055e565b6040516001600160a01b0390911681526020016101e8565b61024461023f366004612647565b6105f8565b005b61024461025436600461245c565b61070e565b610244610267366004612706565b610795565b610274610828565b6040519081526020016101e8565b610274610290366004612647565b610837565b6102446102a336600461245c565b610860565b6102196102b6366004612410565b6001600160a01b039081166000908152600760205260409020541690565b6102446102e2366004612410565b61087b565b600b54610219906001600160a01b031681565b610219610308366004612706565b61088a565b61027461031b366004612410565b610915565b6102446109af565b61036161033636600461256c565b7f150b7a023d4804d13e8c85fb27262cb750cf6ba9f9dd3bb30d90f482ceeb4b1f9695505050505050565b6040516001600160e01b031990911681526020016101e8565b610274610388366004612410565b610a15565b6006546001600160a01b0316610219565b6102746103ac366004612706565b610a33565b6101f9610a8f565b6102746103c7366004612410565b610a9e565b6102446103da36600461260d565b610abf565b6102446103ed366004612706565b610aca565b610244610400366004612497565b610b5b565b610244610413366004612670565b610be9565b6101f9610426366004612706565b610d1f565b6101dc61043936600461242a565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b610244610475366004612410565b610e14565b60006001600160e01b031982166380ac58cd60e01b14806104ab57506001600160e01b03198216635b5e139f60e01b145b806104c657506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546104db90612837565b80601f016020809104026020016040519081016040528092919081815260200182805461050790612837565b80156105545780601f1061052957610100808354040283529160200191610554565b820191906000526020600020905b81548152906001019060200180831161053757829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166105dc5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006106038261088a565b9050806001600160a01b0316836001600160a01b031614156106715760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016105d3565b336001600160a01b038216148061068d575061068d8133610439565b6106ff5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016105d3565b6107098383610ef3565b505050565b6107183382610f61565b61078a5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016105d3565b610709838383611058565b600b54604051635c46a7ef60e11b81523060048083019190915233602483015260448201849052608060648301526084820152630307830360e41b60a48201526001600160a01b039091169063b88d4fde9060c401600060405180830381600087803b15801561080457600080fd5b505af1158015610818573d6000803e3d6000fd5b5050505061082581611212565b50565b60006108326112b5565b905090565b6001600160a01b038216600090815260086020526040812061085990836113dc565b9392505050565b61070983838360405180602001604052806000815250610b5b565b336108868183611507565b5050565b6000818152600260205260408120546001600160a01b0316806104c65760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e000000000000000000000000000000000000000000000060648201526084016105d3565b60006001600160a01b0382166109935760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f20616464726573730000000000000000000000000000000000000000000060648201526084016105d3565b506001600160a01b031660009081526003602052604090205490565b6006546001600160a01b03163314610a095760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105d3565b610a136000611579565b565b6001600160a01b0381166000908152600a60205260408120546104c6565b6000438210610a845760405162461bcd60e51b815260206004820152601a60248201527f566f7465733a20626c6f636b206e6f7420796574206d696e656400000000000060448201526064016105d3565b6104c66009836113dc565b6060600180546104db90612837565b6001600160a01b03811660009081526008602052604081206104c6906115cb565b610886338383611635565b600b54604051635c46a7ef60e11b81523360048083019190915230602483015260448201849052608060648301526084820152630307830360e41b60a48201526001600160a01b039091169063b88d4fde9060c401600060405180830381600087803b158015610b3957600080fd5b505af1158015610b4d573d6000803e3d6000fd5b505050506108863382611704565b610b653383610f61565b610bd75760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016105d3565b610be384848484611710565b50505050565b83421115610c395760405162461bcd60e51b815260206004820152601860248201527f566f7465733a207369676e61747572652065787069726564000000000000000060448201526064016105d3565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b038816918101919091526060810186905260808101859052600090610cb390610cab9060a0016040516020818303038152906040528051906020012061178e565b8585856117dc565b9050610cbe81611804565b8614610d0c5760405162461bcd60e51b815260206004820152601460248201527f566f7465733a20696e76616c6964206e6f6e636500000000000000000000000060448201526064016105d3565b610d168188611507565b50505050505050565b6000818152600260205260409020546060906001600160a01b0316610dac5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e000000000000000000000000000000000060648201526084016105d3565b6000610dc360408051602081019091526000815290565b90506000815111610de35760405180602001604052806000815250610859565b80610ded8461182c565b604051602001610dfe92919061274a565b6040516020818303038152906040529392505050565b6006546001600160a01b03163314610e6e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105d3565b6001600160a01b038116610eea5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016105d3565b61082581611579565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610f288261088a565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b0316610fda5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016105d3565b6000610fe58361088a565b9050806001600160a01b0316846001600160a01b0316148061102c57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b806110505750836001600160a01b03166110458461055e565b6001600160a01b0316145b949350505050565b826001600160a01b031661106b8261088a565b6001600160a01b0316146110e75760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e657200000000000000000000000000000000000000000000000000000060648201526084016105d3565b6001600160a01b0382166111495760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016105d3565b611154600082610ef3565b6001600160a01b038316600090815260036020526040812080546001929061117d9084906127f4565b90915550506001600160a01b03821660009081526003602052604081208054600192906111ab9084906127c8565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a461070983838361195e565b600061121d8261088a565b905061122a600083610ef3565b6001600160a01b03811660009081526003602052604081208054600192906112539084906127f4565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a46108868160008461195e565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561130e57507f000000000000000000000000000000000000000000000000000000000000000046145b1561133857507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b600043821061142d5760405162461bcd60e51b815260206004820181905260248201527f436865636b706f696e74733a20626c6f636b206e6f7420796574206d696e656460448201526064016105d3565b825460005b818110156114a05760006114468284611969565b90508486600001828154811061146c57634e487b7160e01b600052603260045260246000fd5b60009182526020909120015463ffffffff16111561148c5780925061149a565b6114978160016127c8565b91505b50611432565b81156114f257846114b26001846127f4565b815481106114d057634e487b7160e01b600052603260045260246000fd5b60009182526020909120015464010000000090046001600160e01b03166114f5565b60005b6001600160e01b031695945050505050565b6001600160a01b0382811660008181526007602052604080822080548686166001600160a01b0319821681179092559151919094169392849290917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4610709818361157486611984565b61198f565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8054600090801561162257826115e26001836127f4565b8154811061160057634e487b7160e01b600052603260045260246000fd5b60009182526020909120015464010000000090046001600160e01b0316611625565b60005b6001600160e01b03169392505050565b816001600160a01b0316836001600160a01b031614156116975760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016105d3565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b60006104c68383611acc565b61171b848484611058565b61172784848484611ae6565b610be35760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60648201526084016105d3565b60006104c661179b6112b5565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60008060006117ed87878787611c3b565b915091506117fa81611d28565b5095945050505050565b6001600160a01b0381166000908152600a602052604090208054600181018255905b50919050565b6060816118505750506040805180820190915260018152600360fc1b602082015290565b8160005b811561187a57806118648161286c565b91506118739050600a836127e0565b9150611854565b60008167ffffffffffffffff8111156118a357634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156118cd576020820181803683370190505b5090505b8415611050576118e26001836127f4565b91506118ef600a86612887565b6118fa9060306127c8565b60f81b81838151811061191d57634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611957600a866127e0565b94506118d1565b610709838383611f29565b600061197860028484186127e0565b610859908484166127c8565b60006104c682610915565b816001600160a01b0316836001600160a01b0316141580156119b15750600081115b15610709576001600160a01b03831615611a3f576001600160a01b038316600090815260086020526040812081906119ec90611f3585611f41565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611a34929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615610709576001600160a01b03821660009081526008602052604081208190611a7590611f6f85611f41565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611abd929190918252602082015260400190565b60405180910390a25050505050565b610886828260405180602001604052806000815250611f7b565b60006001600160a01b0384163b15611c3357604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611b2a903390899088908890600401612779565b602060405180830381600087803b158015611b4457600080fd5b505af1925050508015611b74575060408051601f3d908101601f19168201909252611b71918101906126ea565b60015b611c19573d808015611ba2576040519150601f19603f3d011682016040523d82523d6000602084013e611ba7565b606091505b508051611c115760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60648201526084016105d3565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611050565b506001611050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611c725750600090506003611d1f565b8460ff16601b14158015611c8a57508460ff16601c14155b15611c9b5750600090506004611d1f565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611cef573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611d1857600060019250925050611d1f565b9150600090505b94509492505050565b6000816004811115611d4a57634e487b7160e01b600052602160045260246000fd5b1415611d535750565b6001816004811115611d7557634e487b7160e01b600052602160045260246000fd5b1415611dc35760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016105d3565b6002816004811115611de557634e487b7160e01b600052602160045260246000fd5b1415611e335760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016105d3565b6003816004811115611e5557634e487b7160e01b600052602160045260246000fd5b1415611eae5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016105d3565b6004816004811115611ed057634e487b7160e01b600052602160045260246000fd5b14156108255760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016105d3565b61070983836001611ff9565b600061085982846127f4565b600080611f6385611f5e611f54886115cb565b868863ffffffff16565b612069565b91509150935093915050565b600061085982846127c8565b611f8583836121ab565b611f926000848484611ae6565b6107095760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60648201526084016105d3565b6001600160a01b038316612018576120156009611f6f83611f41565b50505b6001600160a01b038216612037576120346009611f3583611f41565b50505b6001600160a01b038381166000908152600760205260408082205485841683529120546107099291821691168361198f565b815460009081908161207a866115cb565b90506000821180156120c6575043866120946001856127f4565b815481106120b257634e487b7160e01b600052603260045260246000fd5b60009182526020909120015463ffffffff16145b15612134576120d4856122f5565b866120e06001856127f4565b815481106120fe57634e487b7160e01b600052603260045260246000fd5b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b031602179055506121a2565b85600001604051806040016040528061214c43612378565b63ffffffff168152602001612160886122f5565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b95939450505050565b6001600160a01b0382166122015760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016105d3565b6000818152600260205260409020546001600160a01b0316156122665760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105d3565b6001600160a01b038216600090815260036020526040812080546001929061228f9084906127c8565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a46108866000838361195e565b60006001600160e01b038211156123745760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203260448201527f323420626974730000000000000000000000000000000000000000000000000060648201526084016105d3565b5090565b600063ffffffff8211156123745760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201527f322062697473000000000000000000000000000000000000000000000000000060648201526084016105d3565b80356001600160a01b038116811461240b57600080fd5b919050565b600060208284031215612421578081fd5b610859826123f4565b6000806040838503121561243c578081fd5b612445836123f4565b9150612453602084016123f4565b90509250929050565b600080600060608486031215612470578081fd5b612479846123f4565b9250612487602085016123f4565b9150604084013590509250925092565b600080600080608085870312156124ac578081fd5b6124b5856123f4565b93506124c3602086016123f4565b925060408501359150606085013567ffffffffffffffff808211156124e6578283fd5b818701915087601f8301126124f9578283fd5b81358181111561250b5761250b6128c7565b604051601f8201601f19908116603f01168101908382118183101715612533576125336128c7565b816040528281528a602084870101111561254b578586fd5b82602086016020830137918201602001949094529598949750929550505050565b60008060008060008060a08789031215612584578182fd5b61258d876123f4565b955061259b602088016123f4565b94506040870135935060608701359250608087013567ffffffffffffffff808211156125c5578384fd5b818901915089601f8301126125d8578384fd5b8135818111156125e6578485fd5b8a60208285010111156125f7578485fd5b6020830194508093505050509295509295509295565b6000806040838503121561261f578182fd5b612628836123f4565b91506020830135801515811461263c578182fd5b809150509250929050565b60008060408385031215612659578182fd5b612662836123f4565b946020939093013593505050565b60008060008060008060c08789031215612688578182fd5b612691876123f4565b95506020870135945060408701359350606087013560ff811681146126b4578283fd5b9598949750929560808101359460a0909101359350915050565b6000602082840312156126df578081fd5b8135610859816128dd565b6000602082840312156126fb578081fd5b8151610859816128dd565b600060208284031215612717578081fd5b5035919050565b6000815180845261273681602086016020860161280b565b601f01601f19169290920160200192915050565b6000835161275c81846020880161280b565b83519083019061277081836020880161280b565b01949350505050565b60006001600160a01b038087168352808616602084015250836040830152608060608301526127ab608083018461271e565b9695505050505050565b602081526000610859602083018461271e565b600082198211156127db576127db61289b565b500190565b6000826127ef576127ef6128b1565b500490565b6000828210156128065761280661289b565b500390565b60005b8381101561282657818101518382015260200161280e565b83811115610be35750506000910152565b600181811c9082168061284b57607f821691505b6020821081141561182657634e487b7160e01b600052602260045260246000fd5b60006000198214156128805761288061289b565b5060010190565b600082612896576128966128b1565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461082557600080fdfea164736f6c6343000804000a";

type NewNFTTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NewNFTTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NewNFTToken__factory extends ContractFactory {
  constructor(...args: NewNFTTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _oldNFTTokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NewNFTToken> {
    return super.deploy(
      _oldNFTTokenAddress,
      overrides || {}
    ) as Promise<NewNFTToken>;
  }
  override getDeployTransaction(
    _oldNFTTokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_oldNFTTokenAddress, overrides || {});
  }
  override attach(address: string): NewNFTToken {
    return super.attach(address) as NewNFTToken;
  }
  override connect(signer: Signer): NewNFTToken__factory {
    return super.connect(signer) as NewNFTToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NewNFTTokenInterface {
    return new utils.Interface(_abi) as NewNFTTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NewNFTToken {
    return new Contract(address, _abi, signerOrProvider) as NewNFTToken;
  }
}