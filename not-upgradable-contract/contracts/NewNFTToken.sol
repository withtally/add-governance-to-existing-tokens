// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/draft-ERC721Votes.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

contract NewNFTToken is ERC721, Ownable, EIP712, ERC721Votes {
    IERC721 public oldNFTToken;

    constructor(address _oldNFTTokenAddress) ERC721("NewNFTToken", "NNTK") EIP712("NewNFTToken", "1") {
        oldNFTToken = IERC721(_oldNFTTokenAddress);
    }

    // holder needs to approve this contract address before calling this method
    function stake(uint256 _tokenId) public {
        oldNFTToken.safeTransferFrom(msg.sender, address(this), _tokenId, "0x00"); // transfer token to this contract - stake
        safeMint(msg.sender, _tokenId); // mint a new vote token for staker
    }

    function withdraw(uint256 _tokenId) public {
        oldNFTToken.safeTransferFrom(address(this), msg.sender, _tokenId, "0x00");

        _burn(_tokenId); // burn voteToken after withdraw
    }

    function safeMint(address _to, uint256 _tokenId) private returns (uint256 tokenId) {
        _safeMint(_to, _tokenId);
    }

    function onERC721Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes calldata data
    ) external returns (bytes4) {
        return bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"));
    }

    // The following functions are overrides required by Solidity.

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Votes) {
        super._afterTokenTransfer(from, to, tokenId);
    }
}
