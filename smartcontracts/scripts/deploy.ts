import { ethers } from "hardhat";

async function main() {
  const CHARACTER_NFT = await ethers.getContractFactory("CharacterNFT");
  const characterNFT = await CHARACTER_NFT.deploy("Character", "CHR");
  await characterNFT.deployed();

  console.log(`NFT contract is deployed to ${characterNFT.address} address`);

  const COIN = await ethers.getContractFactory("Coin");
  const coin = await COIN.deploy("FunCodeToken", "FCT");
  await coin.deployed();

  console.log(`Coin contract is deployed to ${coin.address} address`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
