import express from "express"
import { PokemonDataBase } from "../data/PokemonDataBase"
import { PokemonBusiness } from "../business/PokemonBusiness"
import { PokemonController } from "../controller/PokemonController"

export const PokemonRouter = express.Router()

const pokemonController = new PokemonController()


PokemonRouter.get("/pokemon", pokemonController.gottaCatchAll)