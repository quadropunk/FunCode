// SPDX-License-Identifier: No-Lisence
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract Coin is ERC20, AccessControl {
    bytes32 private constant OWNER_ROLE = keccak256("OWNER_ROLE");

    constructor(string memory _name, string memory _symbol)
        ERC20(_name, _symbol) {
            _grantRole(OWNER_ROLE, _msgSender());
        }
    
    function mint(address account, uint256 amount) public onlyRole(OWNER_ROLE) {
        _mint(account, amount);
    }
    
    function burn(address account, uint256 amount) public onlyRole(OWNER_ROLE) {
        _burn(account, amount);
    }
}