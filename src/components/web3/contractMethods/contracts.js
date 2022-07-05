import Web3 from "web3/dist/web3.min.js";

const CHARACTER_NFT_ABI = require("../abi/character.json").abi;
const COIN_ABI = require("../abi/coin.json").abi;

const CHARACTER_NFT_ADDRESS = "0x26312219Ab4c84Ae8D7273BB749Adf1905dBE0E1";
const COIN_ADDRESS = "0x1032f080170E71E104bAa9FB1F470FDCe526d509";

const WEB3 = new Web3(Web3.givenProvider || "http://localhost:7545");

export async function coinContract() {
    try {
        return new WEB3.eth.Contract(COIN_ABI, COIN_ADDRESS);
    } catch (error) {
        console.error(error);
    }
}

export async function characterNftContract() {
    try {
        return new WEB3.eth.Contract(CHARACTER_NFT_ABI, CHARACTER_NFT_ADDRESS);
    } catch (error) {
        console.error(error);
    }
}