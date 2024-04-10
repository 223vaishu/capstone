const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
};

const isConnected = () => {
    return mongoose.connection.readyState === 1;
};

module.exports = { isConnected, connectDB };