import {CryptoCompare} from "../deps.ts"

Deno.test("SymbolPrice", async() => {
    const res1 = null
    const res2 = undefined
    const crypt = new CryptoCompare()
    const res = await crypt.SymbolPrice

    if(res === res1 || res === res2) {
        throw Error("res should not be null or undefined.")
    }
})

Deno.test("MultipleSymbolPrices", async() => {
    const res1 = null
    const res2 = undefined
    const crypt = new CryptoCompare()
    const res = await crypt.MultipleSymbolPrices(["BTC", "ETH"])

    if(res === res1 || res === res2) {
        throw Error("res should not be null or undefined.")
    }
})

Deno.test("FullSymbolData", async() => {
    const res1 = null
    const res2 = undefined
    const crypt = new CryptoCompare()
    const res = await crypt.FullSymbolData(["BTC", "ETH"])

    if(res === res1 || res === res2) {
        throw Error("res should not be null or undefined.")
    }
})