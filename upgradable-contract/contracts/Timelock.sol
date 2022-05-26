// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts-upgradeable/governance/TimelockControllerUpgradeable.sol";

contract Timelock is TimelockControllerUpgradeable {
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(
        uint256 _minDelay,
        address[] memory _proposers,
        address[] memory _executors
    ) public initializer {
        __TimelockController_init(_minDelay, _proposers, _executors);
    }
}
