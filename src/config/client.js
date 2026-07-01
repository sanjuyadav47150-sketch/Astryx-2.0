const {
    Client,
    GatewayIntentBits,
    Partials,
    Collection
} = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessageReactions
    ],

    partials: [
        Partials.Channel,
        Partials.Message,
        Partials.Reaction,
        Partials.GuildMember,
        Partials.User
    ]
});

client.commands = new Collection();
client.slashCommands = new Collection();
client.cooldowns = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();
client.modals = new Collection();

module.exports = client;
