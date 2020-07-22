require("dotenv").config();

module.exports = {
    dialect: "postgres",
    host: "localhost",
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    define: {
        timestamps: false,
    },
};
