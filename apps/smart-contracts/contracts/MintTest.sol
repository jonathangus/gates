// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import './IGates.sol';

contract MintTest {
    function yourFunction() external {
        bool elligble = IGates(0x5241FEC04A8f10b5F2993b32a2b5b3B55e27ef20)
            .verify(msg.sender, '');
        require(elligble, 'User not allowed to procced');
        // ...
    }
}
