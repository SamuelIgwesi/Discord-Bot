const { SlashCommandBuilder } = require("discord.js");

module.exporst = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
  async execute(interaction) {
    await interaction.reply("pong!");
  },
};
