const {
    EmbedBuilder
} = require("discord.js");

const constants = require("../utils/constants");

module.exports = (title, description) => {

    return new EmbedBuilder()

        .setColor(constants.DEFAULT_COLOR)

        .setTitle(title)

        .setDescription(description)

        .setFooter({
            text: constants.FOOTER
        })

        .setTimestamp();

};
