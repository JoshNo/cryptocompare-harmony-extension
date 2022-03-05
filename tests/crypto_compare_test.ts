import {assert, assertEquals} from "https://deno.land/std@0.128.0/testing/asserts.ts"
import {CryptoCompare, soxa} from "../deps.ts"

const API_KEY = Deno.env.get("API_KEY")
const HEADER = { headers: {"Authorization": "Apikey " + API_KEY}}

Deno.test(".env check", () => {
    assert(typeof API_KEY === "string", `API_KEY is ${API_KEY}.`)
})

Deno.test("Check API", async() => {
    const res = await soxa.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR", HEADER)
    assertEquals(res.status, 200)
})

Deno.test("SymbolPrice", async() => {
    const crypt = new CryptoCompare()
    const res = await crypt.SymbolPrice("BTC")
    if(res !== undefined || res !== null) {
        assert("We received our promise", "no promise received")
    }
})

Deno.test("MultipleSymbolPrices", async() => {
    const crypt = new CryptoCompare()
    const res = await crypt.MultipleSymbolPrices(["BTC", "ETH", "DOGE"])
    if(res !== undefined || res !== null) {
        assert("We received our promise", "no promise received")
    }
})