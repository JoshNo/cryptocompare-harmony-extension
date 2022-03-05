import {CommandClient, Command, Extension, CommandContext} from "./deps.ts"
import {CryptoCompare} from "./deps.ts"

export class CryptoCompareExt extends Extension {
    name ="CryptoCompare"
    constructor(client: CommandClient) {
        super(client)
        this.commands.add(CurrentPrice)
        console.log()
    }
}

export class CurrentPrice extends Command {
    name = "current"
    guildOnly = true
    usage = "**USAGE**: !current SYMBOL(s)"
    description = "Command to get the current EUR/USD prices for the symbols provided."

    crypt: CryptoCompare = new CryptoCompare()
    execute(ctx: CommandContext): void {
        if(ctx.rawArgs.length < 2) {
            const symbol = ctx.rawArgs[0]
            this.crypt.SymbolPrice(symbol).then(function(val) {
                ctx.message.reply(val.data.EUR.toString() + "€ / " + val.data.USD.toString() + "$")
            })
        }
        else {
            const symbols = ctx.rawArgs
            let reply = ""
            this.crypt.MultipleSymbolPrices(symbols).then(function(val) {
                console.log(val.data)
                for(const key in val.data) {
                    const value = val.data[key]
                    reply += key + ": " + value.USD + "$, " + value.EUR + "€\n"
                }
                ctx.message.reply(`\`\`\`${reply}\`\`\``)
            })
        }
    }
}