module.exports = (sequelize, Sequelize) => {
  const Pokemon = sequelize.define("pokemon", {
    id : {
      type: Sequelize.INTEGER,
      primaryKey : true
    },
    name: {
      type: Sequelize.STRING
    },
    pokedex_number: {
      type: Sequelize.STRING,
    },
    img_name: {
      type: Sequelize.STRING
    },
    generation: {
      type: Sequelize.STRING
    },
    evolution_stage: {
      type: Sequelize.STRING
    },
    evolved: {
      type: Sequelize.STRING
    },
    family_id: {
      type: Sequelize.STRING
    },
    cross_gen: {
      type: Sequelize.STRING
    },
    type_1: {
      type: Sequelize.STRING
    },
    type_2: {
      type: Sequelize.STRING
    },
    wether_1: {
      type: Sequelize.STRING
    },
    wether_2: {
      type: Sequelize.STRING
    },
    stat_total: {
      type: Sequelize.STRING
    },
    atk: {
      type: Sequelize.STRING
    },
    def: {
      type: Sequelize.STRING
    },
    sta: {
      type: Sequelize.STRING
    },
    legendary: {
      type: Sequelize.STRING
    },
    aquireable: {
      type: Sequelize.STRING
    },
    spawns: {
      type: Sequelize.STRING
    },
    regional: {
      type: Sequelize.STRING
    },
    raidable: {
      type: Sequelize.STRING
    },
    hatchable: {
      type: Sequelize.STRING
    },
    shiny: {
      type: Sequelize.STRING
    },
    nest: {
      type: Sequelize.STRING
    },
    new: {
      type: Sequelize.STRING
    },
    not_gettable: {
      type: Sequelize.STRING
    },
    future_evolve: {
      type: Sequelize.STRING
    },
    '100%_cp_@40': {
      type: Sequelize.STRING
    },
    '100%_cp_@39': {
      type: Sequelize.STRING
    },
  });
  return Pokemon;
};