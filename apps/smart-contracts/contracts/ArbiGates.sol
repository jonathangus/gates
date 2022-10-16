// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import './Autogates.sol';
import '@openzeppelin/contracts/access/AccessControl.sol';

contract ArbiGates is ERC721, AccessControl, Autogates {
    uint256 public MAX_TOKENS = 24;
    string private baseTokenURI;

    mapping(address => bool) private minted;

    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor(
        uint256 _gateId,
        string memory _baseUri,
        uint256 updateInterval
    ) ERC721('Arbigates', 'AGTS') Autogates(_gateId, updateInterval) {
        baseTokenURI = _baseUri;
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function execute(address user) internal virtual override {
        safeMint(user);
    }

    function safeMint(address user) public {
        require(!minted[user], 'User already minted');
        uint256 tokenId = _tokenIdCounter.current();
        require(
            tokenId + 1 <= MAX_TOKENS,
            'Purchase would exceed max supply of tokens'
        );
        _safeMint(user, tokenId);
        _tokenIdCounter.increment();
        minted[user] = true;
    }

    function setBaseURI(string calldata _newBaseURI) external onlyOwner {
        baseTokenURI = _newBaseURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function withdrawAll() external {
        payable(owner()).transfer(address(this).balance);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
