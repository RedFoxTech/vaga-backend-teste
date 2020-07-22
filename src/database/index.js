import Sequelize from "sequelize";
import dbConfig from "../config/database";

class Database {
    constructor() {
        this.connection = new Sequelize(dbConfig);
    }
}

export default new Database();
