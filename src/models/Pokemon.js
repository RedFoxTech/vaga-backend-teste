const restful = require('node-restful');
const mongoose = restful.mongoose;

const PokemonSchema = new mongoose.Schema({

    id: Number,
    name: String,
    prodex_Number: Number,
    img_name: Number,
    generation: Number,
    evolution_Stage: Number,
    evolved: Number,
    familyID: Number,
    cross_Gen: Number,
    type_1: String,
    type_2: String,
    weather_1: String,
    weather_2: String,
    stat_total: Number,
    atk: Number,
    def: Number,
    sta: Number,
    legendary: Number,
    aqueriable: Number,
    spawns: Number,
    regional: Number,
    raidable: Number,
    hatchable: Number,
    shiny: Number,
    nest: Number,
    new: Number,
    not_gettable: Number,
    future_evolve: Number,
    cp_40: Number,
    cp_39: Number,

});

module.exports = restful.model('Pokemons', PokemonSchema);