const { MessageEmbed } = require('discord.js');
import { ICommand } from 'wokcommands'

export default {
	category: 'Discords',
	description: 'Sends SimRealist discord link.',

	permissions: ['ADMINISTRATOR'],

	callback: ({ message, text}) => {
	const SimRealist = new MessageEmbed()
	.setColor('GREEN')
	.setTitle('SimRealist Support Server')
	.setURL('https://discord.gg/XWF4pazfER')
	.setDescription("It seems we can't help you with your problem here. Try asking in SimRealist's server.")
	.setTimestamp()
	.setFooter('This is a message from a bot. Do not respond.');

	return SimRealist

	},
} as ICommand