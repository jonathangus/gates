// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

contract Arbigates is ERC721, Ownable {
    string private baseTokenURI;
    uint256 public MAX_TOKENS = 24;

    mapping(address => bool) private minted;

    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor(string memory _baseUri) ERC721('Arbigates', 'AGTS') {
        baseTokenURI = _baseUri;
    }

    // function execute(address user) internal virtual overrides {
    //     safeMint(user);
    // }

    function safeMint(address user) public {
        require(!minted[user], 'User already minted');
        uint256 tokenId = _tokenIdCounter.current();
        require(
            tokenId + 1 <= MAX_TOKENS,
            'Purchase would exceed max supply of tokens'
        );
        _tokenIdCounter.increment();
        _safeMint(user, _tokenIdCounter.current());
        minted[user] = true;
    }

    function setBaseURI(string calldata _newBaseURI) external onlyOwner {
        baseTokenURI = _newBaseURI;
    }

    function withdrawAll() external {
        payable(owner()).transfer(address(this).balance);
    }
}
