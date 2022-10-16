// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

contract Gates {
    uint256 count = 0;
    mapping(uint256 => bytes) public conditions;
    mapping(bytes32 => address[]) public gates;

    event Created(uint256 gateId, address creator);
    event SnapshotCreated(bytes32 snapshotId, uint256 gateId, address creator);

    function add(bytes calldata _conditions) public {
        conditions[count] = _conditions;
        emit Created(count, msg.sender);
        count++;
    }

    function verify(address user, bytes32 snapshotId)
        public
        view
        returns (bool)
    {
        // TODO create merkle tree or zkproof
        for (uint256 i = 0; i < gates[snapshotId].length; i++) {
            if (gates[snapshotId][i] == user) {
                return true;
            }
        }

        return false;
    }

    function createSnapShot(uint256 gateId, address[] calldata addresses)
        public
    {
        bytes32 id = keccak256(abi.encodePacked(gateId, msg.sender));
        gates[id] = addresses;
        emit SnapshotCreated(id, gateId, msg.sender);
    }
}
