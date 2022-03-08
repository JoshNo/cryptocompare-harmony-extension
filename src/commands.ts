//import
import {Command, CommandContext} from "../deps.ts"
import {CryptoCompare} from "../deps.ts"

//command to return the current price in EUR and USE for the given symbols
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

//command to return the lastvolume information regarding USD and EUR for the specified symbols
export class LastVolume extends Command {
    name = "lastvolume"
    guildOnly = true
    usage = "**USAGE**: !lastvolume SYMBOL(s)"
    decription = "Command to get the last volume for the symbols provided in USD/EUR."

    crypt: CryptoCompare = new CryptoCompare()
    execute(ctx: CommandContext): void {
            const symbols = ctx.rawArgs
            let reply = "Last volume \n"
            this.crypt.FullSymbolData(symbols).then(function(val) {
                for(const symbol in val.data.DISPLAY) {
                    console.log(val.data.DISPLAY)
                    const value = val.data.DISPLAY[symbol]
                    reply += symbol + ": for USD: " + value.USD.LASTVOLUME + ", for EUR: " + value.EUR.LASTVOLUME + "\n"
                }
                ctx.message.reply(`\`\`\`${reply}\`\`\``)
            })
    }
}

//command to return marketcap information regarding EUR and USD for the provided symbols
export class Marketcap extends Command {
    name = "cap"
    guildOnly = true
    usage = "**USAGE** !cap SYMBOL(s)"
    description = "Command to get the marketcap for the symbols provided in USD/EUR."

    crypt: CryptoCompare = new CryptoCompare()
    execute(ctx: CommandContext): void {
            const symbols = ctx.rawArgs
            let reply = "Marketcap \n"
            this.crypt.FullSymbolData(symbols).then(function(val) {
                for(const symbol in val.data.DISPLAY) {
                    console.log(val.data.DISPLAY)
                    const value = val.data.DISPLAY[symbol]
                    reply += symbol + ": for USD: " + value.USD.MARKETCAP + ", for EUR: " + value.EUR.MARKETCAP + "\n"
                }
                ctx.message.reply(`\`\`\`${reply}\`\`\``)
            })
    }
}

//command to return the change in the last 24 hours in EUR and USD for the specified symbols
export class Change24 extends Command {
    name = "change24"
    guildOnly = true
    usage = "**USAGE** !change24 SYMBOL(s)"
    description = "Command to get the change in the last 24 hours for the symbols provided in USD/EUR."

    crypt: CryptoCompare = new CryptoCompare()
    execute(ctx: CommandContext): void {
            const symbols = ctx.rawArgs
            let reply = "Change in the last 24hours \n"
            this.crypt.FullSymbolData(symbols).then(function(val) {
                for(const symbol in val.data.DISPLAY) {
                    console.log(val.data.DISPLAY)
                    const value = val.data.DISPLAY[symbol]
                    reply += symbol + ": for USD: " + value.USD.CHANGE24HOUR + ", for EUR: " + value.EUR.CHANGE24HOUR + "\n"
                }
                ctx.message.reply(`\`\`\`${reply}\`\`\``)
            })
    }
}

//command to get the highest price from today in EUR/USD
export class Highday extends Command {
    name = "highday"
    guildOnly = true
    usage = "**USAGE** !highday SYMBOL(s)"
    description = "Command to get the highest price today for the symbols provided in USD/EUR."

    crypt: CryptoCompare = new CryptoCompare()
    execute(ctx: CommandContext): void {
            const symbols = ctx.rawArgs
            let reply = "Change in the last 24hours \n"
            this.crypt.FullSymbolData(symbols).then(function(val) {
                for(const symbol in val.data.DISPLAY) {
                    console.log(val.data.DISPLAY)
                    const value = val.data.DISPLAY[symbol]
                    reply += symbol + ": for USD: " + value.USD.HIGHDAY + ", for EUR: " + value.EUR.HIGHDAY + "\n"
                }
                ctx.message.reply(`\`\`\`${reply}\`\`\``)
            })
    }
}

//command to get the lowest price from today in EUR/USD
export class Lowday extends Command {
    name = "highday"
    guildOnly = true
    usage = "**USAGE** !lowday SYMBOL(s)"
    description = "Command to get the lowest price today for the symbols provided in USD/EUR."

    crypt: CryptoCompare = new CryptoCompare()
    execute(ctx: CommandContext): void {
            const symbols = ctx.rawArgs
            let reply = "Change in the last 24hours \n"
            this.crypt.FullSymbolData(symbols).then(function(val) {
                for(const symbol in val.data.DISPLAY) {
                    console.log(val.data.DISPLAY)
                    const value = val.data.DISPLAY[symbol]
                    reply += symbol + ": for USD: " + value.USD.LOWDAY + ", for EUR: " + value.EUR.LOWDAY + "\n"
                }
                ctx.message.reply(`\`\`\`${reply}\`\`\``)
            })
    }
}