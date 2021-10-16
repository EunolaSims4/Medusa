import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import 'dotenv/config'

const client = new DiscordJS.Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
      Intents.FLAGS.GUILD_PRESENCES,
    ]
})

client.on('ready',() => {
    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'Commands'),
        featuresDir: path.join(__dirname, 'Features'),
        typeScript: true,
        botOwners: ['341671812523884544','600766234635665411','513936367344943104'],
        mongoUri: process.env.MONGO_URI,
    })
})

client.login(process.env.TOKEN)
