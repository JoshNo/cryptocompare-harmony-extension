//import
import {Command, CommandContext} from "../deps.ts"
import {CryptoCompare} from "../deps.ts"

export class CurrentPrice extends Command {
    name = "current"
    guildOnly = true
    usage = "**USAGE**: !current SYMBOL(s)"
    description = "Command to get the current EUR/USD prices for the symbols provided."

    crypt: CryptoCompare = new CryptoCompare()
    execute(ctx: CommandContext): void {
        //single symbol
        if(ctx.rawArgs.length < 2) {
            const symbol = ctx.rawArgs[0]
            this.crypt.SymbolPrice(symbol).then(function(val) {
                ctx.message.reply(val.data.EUR.toString() + "€ / " + val.data.USD.toString() + "$")
            })
        }
        //multiple symbols
        else {
            const symbols = ctx.rawArgs
            let reply = ""
            this.crypt.MultipleSymbolPrices(symbols).then(function(val) {
                for(const key in val.data) {
                    const value = val.data[key]
                    reply += key + ": " + value.USD + "$, " + value.EUR + "€\n"
                }
                ctx.message.reply(`\`\`\`${reply}\`\`\``)
            })
        }
    }
}

//command to return the lastvolume information regarding USD and EUR for the specified symbol(s)
export class LastVolume extends Command {
    name = "lastvolume"
    guildOnly = true
    usage = "**USAGE**: !lastvolume SYMBOL(s)"
    decription = "Comand to get the last volume for the symbols provided in USD/EUR."

    crypt: CryptoCompare = new CryptoCompare()
    execute(ctx: CommandContext): void {
            const symbols = ctx.rawArgs
            let reply = "LAST VOLUME \n"
            this.crypt.FullSymbolData(symbols).then(function(val) {
                for(const symbol in val.data.DISPLAY) {
                    console.log(val.data.DISPLAY)
                    const value = val.data.DISPLAY[symbol]
                    reply += symbol + ": for EUR: " + value.USD.LASTVOLUME + ", for USD: " + value.EUR.LASTVOLUME + "\n"
                }
                ctx.message.reply(`\`\`\`${reply}\`\`\``)
            })
    }
}