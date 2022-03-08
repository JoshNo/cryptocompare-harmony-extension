import {assert, assertEquals, CryptoCompare, soxa} from "../deps.ts"

const API_KEY = Deno.env.get("API_KEY")
const HEADER = { headers: {"Authorization": "Apikey " + API_KEY}}

//test .env
Deno.test(".env check", () => {
    assert(typeof API_KEY === "string", `API_KEY is ${API_KEY}.`)
})

//test API connection
Deno.test("Check API", async() => {
    const res = await soxa.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR", HEADER)
    assertEquals(res.status, 200)
})

//API query tests
Deno.test("SymbolPrice", async() => {
    const crypt = new CryptoCompare()
    const res = await crypt.SymbolPrice("BTC")
    if(res !== undefined || res !== null) {
        assert("We received our promise", "Promise expected")
    }
})

Deno.test("MultipleSymbolPrices", async() => {
    const crypt = new CryptoCompare()
    const res = await crypt.MultipleSymbolPrices(["BTC", "ETH", "DOGE"])
    if(res !== undefined || res !== null) {
        assert("We received our promise", "Promise expected")
    }
})

Deno.test("FullSymbolData", async() => {
    const crypt = new CryptoCompare()
    const res = await crypt.FullSymbolData(["BTC", "ETH", "DOGE"])
    
    if(res !== undefined || res !== null) {
        assert("We received our promise", "Promise expected")
    }
})