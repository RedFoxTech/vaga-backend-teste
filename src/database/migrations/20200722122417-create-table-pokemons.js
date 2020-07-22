module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("pokemons", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            pokedex_number: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            img_name: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            generation: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            evolution_stage: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            evolved: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            familyid: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            crossgen: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            type: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            type2: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            weather1: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            weather2: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            stat_total: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            atk: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            def: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            sta: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            stat_total: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            legendary: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            aquireable: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            spawns: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            regional: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            raidable: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            hatchable: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            shiny: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            nest: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            new: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            not_gettable: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            future_envolve: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            cp_40: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            cp_39: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
        });
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable("pokemons");
    },
};
