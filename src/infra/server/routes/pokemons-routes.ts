import { Router } from "express";
import { ControllerAdapter } from "../adapters/controller-adapter";
import { listPokemonsControllerFactory } from "../../../main/factories/controllers/list-pokemons-controller-factory";
import { findPokemonControllerFactory } from "../../../main/factories/controllers/find-pokemon-controller-factory";
const router = Router();
router.get("/list/:page", ControllerAdapter(listPokemonsControllerFactory()));
router.get("/:id", ControllerAdapter(findPokemonControllerFactory()));

export { router as pokemonRoutes };
