import {soxa} from "../deps.ts"

export class CryptoCompare {

    api_key = Deno.env.get("API_KEY")
    headers = { headers: {"Authorization": "Apikey " + this.api_key}}

    //queries a single symbol and their current USD/EUR price
    async SymbolPrice(symbol: string) {
        try {
            return await soxa.get("https://min-api.cryptocompare.com/data/price?fsym=" + symbol + "&tsyms=USD,EUR", this.headers)
        } catch (err) {
            console.error(err)
            return err
        }
    }

    //queries an array of symbols and their current USD/EUR prics
    async MultipleSymbolPrices(symbols: string[]){
        try {
            return await soxa.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=" + symbols.join() + "&tsyms=USD,EUR", this.headers)
        } catch (err) {
            console.error(err)
            return err
        }
    }
    
    //queries and array of symbols and their full data regarding USD and EUR
    async FullSymbolData(symbols: string[]) {
        try {
            return await soxa.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + symbols.join() + "&tsyms=USD,EUR")
        } catch (err) {
            console.error(err)
            return err
        }
    }
}
