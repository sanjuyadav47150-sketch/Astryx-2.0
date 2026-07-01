require("dotenv").config();

module.exports = {
    bot: {
        token: process.env.BOT_TOKEN,
        clientId: process.env.CLIENT_ID,
        guildId: process.env.GUILD_ID,
        ownerId: process.env.OWNER_ID,
        prefix: process.env.PREFIX || "!"
    },

    database: {
        uri: process.env.MONGODB_URI
    },

    embeds: {
        color: process.env.EMBED_COLOR || "#808080"
    },

    dashboard: {
        port: Number(process.env.DASHBOARD_PORT) || 3000
    },

    logging: {
        level: process.env.LOG_LEVEL || "info"
    }
};
