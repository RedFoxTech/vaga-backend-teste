import mongoose from "mongoose";
import { Pokemon } from "../../../domain/pokemon";

const pokemonSchema = new mongoose.Schema<Pokemon>({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  imgId: { type: Number, required: true },
  generation: { type: Number, required: true },
  evolutionStage: { type: Number, required: true },
  evolved: { type: Boolean, required: true },
  familyId: { type: Number, required: true },
  crossGen: { type: Boolean, required: true },
  type1: { type: String, required: true },
  type2: { type: String, required: true },
  weather1: { type: String, required: true },
  weather2: { type: String, required: true },
  status: { type: Number, required: true },
  atk: { type: Number, required: true },
  def: { type: Number, required: true },
  sta: { type: Number, required: true },
  legendary: { type: Number, required: true },
  aquireable: { type: Number, required: true },
  spawns: { type: Number, required: true },
  regional: { type: Boolean, required: true },
  hatchable: { type: Number, required: true },
  shiny: { type: Boolean, required: true },
  nest: { type: Number, required: true },
  isNew: { type: Boolean, required: true },
  notGettable: { type: Boolean, required: true },
  futureEvolve: { type: Boolean, required: true },
  cp100_40: { type: Number, required: true },
  cp100_39: { type: Number, required: true },
});
export const pokemonModel = mongoose.model("pokemons", pokemonSchema);
