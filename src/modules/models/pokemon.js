const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Schema = mongoose.Schema

const pokemon = new Schema({
    row: { type: String, required: true },
    name: { type: String, required: true },
    pokedex_number: { type: String, required: true },
    img_name: { type: String },
    generation: { type: Number },
    evolution_stage: { type: Number },
    evolved: { type: Number, default: 0 },
    family_id: { type: Number, required: true },
    type_1: { type: String, required: true },
    type_2: { type: String },
    weather_1: { type: String, required: true },
    weather_2: { type: String },
    stat_total: { type: Number, default: 0 },
    atk: { type: Number, default: 0 },
    def: { type: Number, default: 0 },
    sta: { type: Number, default: 0 },
    legendary: { type: Number, default: 0 },
    aquireable: { type: Number, default: 0 },
    spawns: { type: Number, default: 0 },
    regional: { type: Number, default: 0 },
    raidable: { type: Number, default: 0 },
    hatchable: { type: Number, default: 0 },
    shiny: { type: Number, default: 0 },
    nest: { type: Number, default: 0 },
    new: { type: Number, default: 0 },
    not_gettable: { type: Number, default: 0 },
    future_evolve: { type: Number, default: 0 },
    cp_40: { type: Number },
    cp_39: { type: Number }
})
pokemon.plugin(mongoosePaginate)
module.exports = mongoose.model('Pokemon', pokemon)
