import Sequelize from "sequelize";
import dbConfig from "../config/database";

import Pokemon from "../app/models/Pokemon";

const models = [Pokemon];

class Database {
    constructor() {
        this.connection = new Sequelize(dbConfig);
        this.init();
    }

    init() {
        models.map((model) => model.init(this.connection));
    }
}

export default new Database();
