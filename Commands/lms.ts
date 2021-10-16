const { MessageEmbed } = require('discord.js');
import { ICommand } from 'wokcommands'

export default {
	category: 'Discords',
	description: 'Sends LittleMsSam discord link.',

	permissions: ['ADMINISTRATOR'],

	callback: ({ message, text}) => {
	const LittleMsSam = new MessageEmbed()
	.setColor('BLUE')
	.setTitle('LittleMsSam Support Server')
	.setURL('https://discord.gg/ebXASBGbQJ')
	.setDescription("It seems we can't help you with your problem here. Try asking in SimRealist's server.")
	.setTimestamp()
	.setFooter('This is a message from a bot. Do not respond.');

	return LittleMsSam

	},
} as ICommand