module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("pokemons", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIcrement: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            pokedex_number: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            img_name: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            generation: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            evolution_stage: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            evolved: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            familyid: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            crossgen: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            type: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            type2: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            weather1: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            weather2: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            stat_total: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            atk: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            def: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            sta: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            stat_total: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            legendary: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            aquireable: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            spawns: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            regional: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            raidable: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            hatchable: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            shiny: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            nest: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            new: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            not_gettable: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            future_envolve: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            cp_40: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            cp_39: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable("pokemons");
    },
};
