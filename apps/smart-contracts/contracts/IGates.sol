// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IGates {
    function verify(address user, bytes32 snapshotId)
        external
        view
        returns (bool);
}
