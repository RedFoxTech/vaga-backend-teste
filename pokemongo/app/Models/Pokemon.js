'use strict'

const mongoose = require('../../database/mongo')

const PokemonSchema = new mongoose.Schema({
  row: {
    type: Number,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  pokedex_number: {
    type: Number,
    require: true
  },
  img_name: {
    type: String,
    require: true
  },
  generation: {
    type: Number,
    require: true
  },
  evolution_stage: {
    type: String,
    require: true
  },
  evolved: {
    type: Number,
    require: true
  },
  family_id: {
    type: Number,
    require: false
  },
  cross_gen: {
    type: Number,
    require: true
  },
  type_1: {
    type: String,
    require: true
  },
  type_2: {
    type: String,
    require: false
  },
  wheather_1: {
    type: String,
    require: true
  },
  wheather_2: {
    type: String,
    require: false
  },
  stat_total: {
    type: Number,
    require: true
  },
  atk: {
    type: Number,
    require: true
  },
  def: {
    type: Number,
    require: true
  },
  sta: {
    type: Number,
    require: true
  },
  legendary: {
    type: Number,
    require: true
  },
  aquireable: {
    type: Number,
    require: true
  },
  spawns: {
    type: Number,
    require: true
  },
  regional: {
    type: Number,
    require: true
  },
  raidable: {
    type: Number,
    require: true
  },
  hatchable: {
    type: Number,
    require: true
  },
  shiny: {
    type: Number,
    require: true
  },
  nest: {
    type: Number,
    require: true
  },
  new: {
    type: Number,
    require: true
  },
  not_Gettable: {
    type: Number,
    require: true
  },
  futute_evolve: {
    type: Number,
    require: true
  },
  forty: {
    type: Number,
    require: true
  },
  thirty_nine: {
    type: Number,
    require: true
  }
})

const Pokemon = mongoose.model('Pokemon', PokemonSchema)

module.exports = Pokemon
