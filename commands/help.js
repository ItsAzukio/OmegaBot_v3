const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('ðºð¸ Show help | ð«ð· Affiche l\'aide'),

    run: async (client, interaction) => {
        await interaction.reply({
            content: 'ðºð¸ Help is coming soon | ð«ð· L\'aide arrive bientÃ´t',
        });
    }
}