const { MessageEmbed } = require('discord.js');
import { ICommand } from 'wokcommands'

export default {
	category: 'SaD',
	description: 'Sends SimsAfterDark discord link.',

	permissions: ['ADMINISTRATOR'],

	callback: ({ message, text}) => {
	const SimsAfterDark = new MessageEmbed()
	.setColor('BLACK')
	.setTitle('SimsAfterDark Support Server')
	.setURL('https://discord.gg/SimsAfterDark')
	.setDescription("It seems we can't help you with your problem here. Try asking in Sims After Dark")
	.setTimestamp()
	.setFooter('This is a message from a bot. Do not respond.');

	return SimsAfterDark

	},
} as ICommand