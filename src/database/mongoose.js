const mongoose = require("mongoose");
const config = require("../config/config");
const logger = require("../utils/logger");

async function connectDatabase() {

    try {

        await mongoose.connect(config.database.uri);

        logger.info("MongoDB connected successfully.");

    }

    catch (error) {

        logger.error(error);

        process.exit(1);

    }

}

module.exports = connectDatabase;
