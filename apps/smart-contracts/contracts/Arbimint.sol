// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import '@openzeppelin/contracts@4.7.3/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts@4.7.3/token/ERC721/extensions/ERC721Enumerable.sol';
import '@openzeppelin/contracts@4.7.3/access/Ownable.sol';
import '@openzeppelin/contracts@4.7.3/utils/Counters.sol';

contract Arbgate is ERC721, Ownable {
    string private baseTokenURI;

    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor(string memory _baseUri) ERC721('Arbigate', 'AGAT') {
        baseTokenURI = _baseUri;
    }

    function execute(address user) virtual overrides {
        safeMint(user);
    }

    function safeMint(address user) public {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(user, tokenId);
    }

    function setBaseURI(string calldata _newBaseURI) external onlyOwner {
        baseTokenURI = _newBaseURI;
    }

    function withdrawAll() external {
        payable(owner).transfer(address(this).balance);
    }
}
