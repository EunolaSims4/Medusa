import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Replies with pong.',

    slash: true,

    callback: ({ message }) => {
       return 'Pong'
    },
} as ICommand
//!ping
// /ping