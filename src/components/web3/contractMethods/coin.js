import { coinContract } from "./contracts";

/*======================================\
|                                       |
|               READ METHODS            |
|                                       |
\======================================*/

export async function balanceOf(address) {
    return coinContract().then(async (token) => await token.methods.balanceOf(address).call());
}

export async function name() {
    return coinContract().then(async (token) => await token.methods.name().call());
}

export async function symbol() {
    return coinContract().then(async (token) => await token.methods.symbol().call());
}

export async function totalSupply() {
    return coinContract().then(async (token) => await token.methods.totalSupply().call());
}

/*======================================\
|                                       |
|               WRITE METHODS           |
|                                       |
\======================================*/

export async function apporve(caller, spender, amount) {
    coinContract().then(async (token) =>
        await token.methods.apporve(spender, amount)
            .send({ from: caller })
    );
}

export async function decreaseAllowance(caller, spender, subtractedValue) {
    coinContract().then(async (token) =>
        await token.methods.decreaseAllowance(spender, subtractedValue)
            .send({ from: caller })
    );
}

export async function increaseAllowance(caller, spender, addedValue) {
    coinContract().then(async (token) =>
        await token.methods.increaseAllowance(spender, addedValue)
            .send({ from: caller })
    );
}

export async function transfer(caller, to, amount) {
    coinContract().then(async (token) =>
        await token.methods.transfer(to, amount)
            .send({ from: caller })
    );
}

export async function transferFrom(caller, from, to, amount) {
    coinContract().then(async (token) =>
        await token.methods.transferFrom(from, to, amount)
            .send({ from: caller })
    );
}