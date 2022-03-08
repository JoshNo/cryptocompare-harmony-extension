//Imports
import {CommandClient, Extension} from "./deps.ts"
import {CurrentPrice, LastVolume, Marketcap, Change24, Highday, Lowday} from "./deps.ts"

//constructor
export class CryptoCompareExt extends Extension {
    name ="CryptoCompare"
    constructor(client: CommandClient) {
        super(client)
        this.commands.add(CurrentPrice)
        this.commands.add(LastVolume)
        this.commands.add(Marketcap)
        this.commands.add(Change24)
        this.commands.add(Highday)
        this.commands.add(Lowday)
    }
}