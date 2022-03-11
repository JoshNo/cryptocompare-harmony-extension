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
                    const value = val.data.DISPLAY[symbol]
                    reply += symbol + ": for USD: " + value.USD.MKTCAP + ", for EUR: " + value.EUR.MKTCAP + "\n"
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
                    const value = val.data.DISPLAY[symbol]
                    reply += symbol + ": for USD: " + value.USD.HIGHDAY + ", for EUR: " + value.EUR.HIGHDAY + "\n"
                }
                ctx.message.reply(`\`\`\`${reply}\`\`\``)
            })
    }
}

//command to get the lowest price from today in EUR/USD
export class Lowday extends Command {
    name = "lowday"
    guildOnly = true
    usage = "**USAGE** !lowday SYMBOL(s)"
    description = "Command to get the lowest price today for the symbols provided in USD/EUR."

    crypt: CryptoCompare = new CryptoCompare()
    execute(ctx: CommandContext): void {
            const symbols = ctx.rawArgs
            let reply = "Change in the last 24hours \n"
            this.crypt.FullSymbolData(symbols).then(function(val) {
                for(const symbol in val.data.DISPLAY) {
                    const value = val.data.DISPLAY[symbol]
                    reply += symbol + ": for USD: " + value.USD.LOWDAY + ", for EUR: " + value.EUR.LOWDAY + "\n"
                }
                ctx.message.reply(`\`\`\`${reply}\`\`\``)
            })
    }
}

//command to get the supply for specifie symbols
export class Supply extends Command {
    name = "supply"
    guildOnly = true
    usage = "**USAGE** !supply SYMBOL(s)"
    description = "Command to get the current supply for the symbols provided"

    crypt: CryptoCompare = new CryptoCompare()
    execute(ctx : CommandContext): void {
        const symbols = ctx.rawArgs
        let reply = "Supply \n"
        this.crypt.FullSymbolData(symbols).then(function(val) {
            for(const symbol in val.data.DISPLAY) {
                const value = val.data.DISPLAY[symbol]
                reply += symbol + ": " + value.EUR.SUPPLY + "\n"
            }
            ctx.message.reply(`\`\`\`${reply}\`\`\``)
        })
    }
}

//command to get the change in the last hour for specified symbols
export class ChangeHour extends Command {
    name = "changehour"
    guildOnly = true
    usage = "**USAGE** !changehour SYMBOL(s)"
    description = "Command to get the change in the last hour for the symbols provided in USD/EUR"

    crypt: CryptoCompare = new CryptoCompare()
    execute(ctx : CommandContext): void {
        const symbols = ctx.rawArgs
        let reply = "Change in the last hour \n"
        this.crypt.FullSymbolData(symbols).then(function(val) {
            for(const symbol in val.data.DISPLAY) {
                const value = val.data.DISPLAY[symbol]
                reply += symbol + ": for USD: " + value.USD.CHANGEHOUR + ", for EUR: " + value.EUR.CHANGEHOUR + "\n"
            }
            ctx.message.reply(`\`\`\`${reply}\`\`\``)
        })
    }
}

//command to get the last market where a transaction took place in USD/EUR
export class LastMarket extends Command {
    name = "lastmarket"
    guildOnly = true
    usage = "**USAGE** !lastmarket SYMBOL(s)"
    description = "Command to get the last market for the specified symbols and USD/EUR"

    crypt: CryptoCompare = new CryptoCompare()
    execute(ctx : CommandContext): void {
        const symbols = ctx.rawArgs
        let reply = "Last market \n"
        this.crypt.FullSymbolData(symbols).then(function(val) {
            for(const symbol in val.data.DISPLAY) {
                const value = val.data.DISPLAY[symbol]
                reply += symbol + ": for USD: " + value.USD.LASTMARKET + ", for EUR: " + value.EUR.LASTMARKET + "\n"
            }
            ctx.message.reply(`\`\`\`${reply}\`\`\``)
        })
    }
}

//command to get the volume in the last 24 hours
export class TotalVolume24h extends Command {
    name = "totalvolume24h"
    guildOnly = true
    usage = "**USAGE** !volume24h SYMBOL(s)"
    description = "Command to get the volume in the last 24hours for the specified symbols"

    crypt: CryptoCompare = new CryptoCompare()
    execute(ctx : CommandContext): void {
        const symbols = ctx.rawArgs
        let reply = "Volume 24hours \n"
        this.crypt.FullSymbolData(symbols).then(function(val) {
            for(const symbol in val.data.DISPLAY) {
                const value = val.data.DISPLAY[symbol]
                reply += symbol + ": " + value.EUR.TOTALVOLUME24H + "\n"
            }
            ctx.message.reply(`\`\`\`${reply}\`\`\``)
        })
    }
}

//Command to get last update for specified symbols
export class LastUpdate extends Command {
    name = "lastupdate"
    guildOnly = true
    usage = "**USAGE** !lastupdate SYMBOL(s)"
    description = "Command to get last update for the specified symbol(s)"

    crypt: CryptoCompare = new CryptoCompare()
    execute(ctx : CommandContext): void {
        const symbols = ctx.rawArgs
        let reply = "Last Update \n"
        this.crypt.FullSymbolData(symbols).then(function(val) {
            for(const symbol in val.data.DISPLAY) {
                const value = val.data.DISPLAY[symbol]
                reply += symbol + ": " + value.EUR.LASTUPDATE + "\n"
            }
            ctx.message.reply(`\`\`\`${reply}\`\`\``)
        })
    }
}

//Command to get all supported symbols
export class SymbolList extends Command {
    name = "symbols"
    guildOnly = true
    usage = "**USAGE** !symbols"
    description = "Command to get all supported symbols"

    crypt: CryptoCompare = new CryptoCompare()
    execute(ctx: CommandContext): void {
        let reply = "Supported symbols\n"
        this.crypt.SymbolList().then(function(val) {
            for(const symbol in val.data.Data) {
                reply += val.data.Data[symbol].symbol+ ", "
                //discord allows a max length of 2000 chars per message
                if(reply.length >= 1000) {
                    //cut away unnecessary commas
                    const newreply = reply.slice(0, -2)
                    ctx.message.reply(`\`\`\`${newreply}\`\`\``)
                    reply = ""
                }
            }
        })
    }
}