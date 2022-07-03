import { characterNftContract } from "./contracts";

/*======================================\
|                                       |
|               READ METHODS            |
|                                       |
\======================================*/

export async function balanceOf(owner) {
    return characterNftContract().then(async (token) => await token.methods.balanceOf(owner).call());
}

export async function characterInfo(characterId) {
    return characterNftContract().then(async (token) => await token.methods.characters(characterId).call());
}

export async function name() {
    return characterNftContract().then(async (token) => await token.methods.name().call());
}

export async function ownerOf(tokenId) {
    return characterNftContract().then(async (token) => await token.methods.ownerOf(tokenId).call());
}

export async function symbol() {
    return characterNftContract().then(async (token) => await token.methods.symbol().call());
}

export async function tokenUri(tokenId) {
    return characterNftContract().then(async (token) => await token.methods.tokenUri(tokenId).call());
}

/*======================================\
|                                       |
|               WRITE METHODS           |
|                                       |
\======================================*/

export async function apporve(caller, spender, amount) {
    characterNftContract().then(async (token) =>
        await token.methods.apporve(spender, amount)
            .send({ from: caller })
    );
}

export async function levelUp(caller, characterId) {
    characterNftContract().then(async (token) =>
        await token.methods.levelUp(characterId)
            .send({ from: caller })
    );
}

export async function transferFrom(caller, from, to, amount) {
    characterNftContract().then(async (token) =>
        await token.methods.safeTransferFrom(from, to, amount)
            .send({ from: caller })
    );
}