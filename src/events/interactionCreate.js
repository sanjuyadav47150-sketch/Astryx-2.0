module.exports = {

    name: "interactionCreate",

    async execute(interaction) {

        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.slashCommands.get(interaction.commandName);

        if (!command) return;

        try {

            await command.execute(interaction);

        }

        catch (error) {

            console.error(error);

        }

    }

};
