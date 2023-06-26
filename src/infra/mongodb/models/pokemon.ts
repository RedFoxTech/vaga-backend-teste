import mongoose from "mongoose";
import { Pokemon } from "../../../domain/pokemon";

const pokemonSchema = new mongoose.Schema<Pokemon>({
  id: { type: Number },
  name: { type: String },
  imgName: { type: String },
  generation: { type: Number },
  evolutionStage: { type: String },
  evolved: { type: Boolean },
  familyId: { type: Number },
  crossGen: { type: Boolean },
  type1: { type: String },
  type2: { type: String },
  weather1: { type: String },
  weather2: { type: String },
  status: { type: Number },
  atk: { type: Number },
  def: { type: Number },
  sta: { type: Number },
  legendary: { type: Number },
  aquireable: { type: Number },
  spawns: { type: Number },
  regional: { type: Boolean },
  hatchable: { type: Number },
  shiny: { type: Boolean },
  nest: { type: Number },
  isNew: { type: Boolean },
  notGettable: { type: Boolean },
  futureEvolve: { type: Boolean },
  cp100_40: { type: Number },
  cp100_39: { type: Number },
});
export const pokemonModel = mongoose.model("pokemons", pokemonSchema);
