import { ICommand } from "wokcommands";

export default {
    category: 'Collectors',
    description: '...',

    callback: ({ message}) => {
        message.reply('Enter your username')
    }
} as ICommand