import Sequelize, { Model } from "sequelize";

class Pokemon extends Model {
    static init(sequelize) {
        super.init(
            {
                // id: Sequelize.INTEGER,
                name: Sequelize.STRING,
                pokedex_number: Sequelize.INTEGER,
                img_name: Sequelize.STRING,
                generation: Sequelize.INTEGER,
                evolution_stage: Sequelize.STRING,
                evolved: Sequelize.INTEGER,
                familyid: Sequelize.INTEGER,
                crossgen: Sequelize.INTEGER,
                type: Sequelize.STRING,
                type2: Sequelize.STRING,
                weather1: Sequelize.STRING,
                weather2: Sequelize.STRING,
                stat_total: Sequelize.INTEGER,
                atk: Sequelize.INTEGER,
                def: Sequelize.INTEGER,
                sta: Sequelize.INTEGER,
                stat_total: Sequelize.INTEGER,
                legendary: Sequelize.INTEGER,
                aquireable: Sequelize.INTEGER,
                spawns: Sequelize.INTEGER,
                regional: Sequelize.INTEGER,
                raidable: Sequelize.INTEGER,
                hatchable: Sequelize.INTEGER,
                shiny: Sequelize.INTEGER,
                nest: Sequelize.INTEGER,
                new: Sequelize.INTEGER,
                not_gettable: Sequelize.INTEGER,
                future_envolve: Sequelize.INTEGER,
                cp_40: Sequelize.INTEGER,
                cp_39: Sequelize.INTEGER,
            },
            {
                sequelize,
                tableName: "pokemons",
            }
        );
    }
}

export default Pokemon;
