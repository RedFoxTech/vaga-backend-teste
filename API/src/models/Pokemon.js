const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate');

const Pokemon = new mongoose.Schema({
  Name: { type: String, indexes: {unique: true} },
  PokedexNumber: { type: Number },
  Imgname: { type: String },
  Generation: { type: Number },
  EvolutionStage: { type: Number },
  Evolved: { type: Number },
  FamilyID: { type: Number },
  CrossGen: { type: Number },
  Type1: { type: String },
  Type2: { type: String },
  Weather1: { type: String },
  Weather2: { type: String },
  STATTOTAL: { type: Number },
  ATK: { type: Number },
  DEF: { type: Number },
  STA: { type: Number },
  Legendary: { type: Number },
  Aquireable: { type: Number },
  Spawns: { type: Number },
  Regional: { type: Number },
  Raidable: { type: Number },
  Hatchable: { type: Number },
  Shiny: { type: Number },
  Nest: { type: Number },
  New: { type: Number },
  NotGettable: { type: Number },
  FutureEvolve: { type: Number },
  CP40 : { type: Number },
  CP39: { type: Number }
},{collection: 'Pokemon'});

Pokemon.plugin(mongoosePaginate);
mongoose.model('Pokemon', Pokemon);
