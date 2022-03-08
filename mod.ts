//Imports
import {CommandClient, Extension} from "./deps.ts"
import {CurrentPrice, LastVolume} from "./deps.ts"

//constructor
export class CryptoCompareExt extends Extension {
    name ="CryptoCompare"
    constructor(client: CommandClient) {
        super(client)
        this.commands.add(CurrentPrice)
        this.commands.add(LastVolume)
    }
}