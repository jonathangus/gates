// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;
import {MerkleProof} from '@openzeppelin/contracts/utils/cryptography/MerkleProof.sol';

contract Gates {
    uint256 count = 0;
    mapping(uint256 => bytes) public conditions;
    mapping(bytes32 => bytes32) public gates;

    event Created(uint256 gateId, address creator);

    function add(bytes calldata _conditions) public {
        conditions[count] = _conditions;
        emit Created(count, msg.sender);
        count++;
    }

    // function verify(address user, bytes32 snapshotId)
    //     public
    //     view
    //     returns (bool)
    // {
    //     bytes32 leaf = keccak256(abi.encodePacked(user));
    //     bool isValidLeaf = MerkleProof.verify(proof, merkleRoot, leaf);
    // }

    // function createSnapShot(uint256 gateId, bytes32 merkle) public {
    //     bytes32 id = keccak256(abi.encodePacked(gateId, msg.sender));
    //     id = bytes20(keccak256(msg.sender, gateId));
    //     gates[id] = merkle;
    // }
}
