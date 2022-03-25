![workflow_codeql](https://github.com/JoshNo/CryptoCompare-Discord-Deno/actions/workflows/codeql.yml/badge.svg)
![workflow_deno](https://github.com/JoshNo/CryptoCompare-Discord-Deno/actions/workflows/deno.yml/badge.svg)
![GitHub language count](https://img.shields.io/github/languages/count/JoshNo/CryptoCompare-Discord-Deno)

**Some CryptoCompare functions for your Deno-based [Harmony](https://deno.land/x/harmony) Discord Bot**

## Usage
You will have to create a `.env` file in your roote directory of your harmony bot to use this extension. Inside the `.env` file you will have to include your `API_KEY` received from registering an account on [CryptoCompare](https://min-api.cryptocompare.com).
```
API_KEY=
```

## Example
A minimal example of using this extension:
```js
import { CommandClient, Intents } from 'https://deno.land/x/harmony/mod.ts'
import { CryptoCompareExt } from 'https://deno.land/x/cryptocompare-harmony-extension/mod.ts'

const client = new CommandClient({
  prefix: '!'
})

// load the extension
client.extensions.load(CryptoCompareExt)

client.on('ready', () => {
  console.log(`Ready! User: ${client.user?.tag}`)
})

client.connect(BOT_TOKEN, Intents.GuildMembers)
```
