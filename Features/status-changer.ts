// module.exports = (client) => {}

import { Client } from 'discord.js'

export default (client: Client) => {
  const statusOptions = ["Tartarus swallow those who have wronged others","the waves crash against the shore","the howl of the wind","Cerberus bite off heads","the moon shine bright in the sky","the sun chariot fly across the sky","the thunderclouds","the Minotuar eat people","the ocean rise above the land","the empire fall","the snake crumble","!help","the screams of the computer as you mod hunt","you update your mods","the wolves howl at the moon","my creator snore...it's distrubing","your error files get yeeted","you learn something new","the rain fall","the clouds cover the sun","bats fly in the sky","the sounds of thr birds","20 tabs open and 3 are playing music", "brain fart", "what is my purpose again?","update your game for the love of the gods!!","don't poke the bat..he bites"]
  let counter = 0

  const updateStatus = () => {
    client.user?.setPresence({
      status: 'online',
      activities: [
        {
          name: statusOptions[counter],
        },
      ],
    })

    if (++counter >= statusOptions.length) {
      counter = 0
    }

    setTimeout(updateStatus, 1000 * 60 * 2)
  }
  updateStatus()
}

export const config = {
  dbName: 'STATUS_CHANGER',
  displayName: 'Status Changer',
}

// module.exports.config = {}
