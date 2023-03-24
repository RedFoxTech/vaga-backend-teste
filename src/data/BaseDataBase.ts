import dotenv from "dotenv";
import knex from "knex";

dotenv.config();

export default class BaseDataBase {

    protected static connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_SCHEMA,
            port: 3306,
            multipleStatements: true
        },
    })
}