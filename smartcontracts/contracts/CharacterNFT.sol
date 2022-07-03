// SPDX-License-Identifier: No-License
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract CharacterNFT is ERC721, AccessControl {
    struct Character {
        uint32 currentLevel;
    }

    bytes32 private constant OWNER_ROLE = keccak256("OWNER");

    // NFT id => Character
    mapping(uint256 => Character) public characters;

    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol) {
            _grantRole(OWNER_ROLE, _msgSender());
        }
    
    function _baseURI() internal pure override returns(string memory) {
        return "https://bafybeidiqpaxpe45rdr7v6w7q42ejrnyimiagh2wj3p5ckogudqql6my7y.ipfs.nftstorage.link/metadata/characters/";
    }

    function safeMint(address to, uint256 tokenId) public onlyRole(OWNER_ROLE) {
        _safeMint(to, tokenId);
    }

    function burn(uint256 tokenId) public onlyRole(OWNER_ROLE) {
        _burn(tokenId);
    }

    function levelUp(uint256 characterId) external {
        require(ownerOf(characterId) != address(0), "Character with such id does not exist");
        characters[characterId].currentLevel++;
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, AccessControl) returns (bool) {
        return
            interfaceId == type(IERC721).interfaceId ||
            interfaceId == type(IERC721Metadata).interfaceId ||
            interfaceId == type(AccessControl).interfaceId ||
            super.supportsInterface(interfaceId);
    }
}