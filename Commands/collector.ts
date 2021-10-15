import { Message } from 'discord.js';
import { ICommand } from "wokcommands";

export default {
    category: 'Collectors',
    description: '...',

    callback: ({ message}) => {
        message.reply('Enter your username')

        const filter = (m: Message) => {
            return m.author.id === message.author.id
        }

        const collector = channel.createMessageCollector({

        })
    }
} as ICommand