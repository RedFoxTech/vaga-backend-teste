import { Router } from "express";
import { ControllerAdapter } from "../adapters/controller-adapter";
import { listPokemonsControllerFactory } from "../../../main/factories/controllers/list-pokemons-controller-factory";
const router = Router();
router.get("/list/:page", ControllerAdapter(listPokemonsControllerFactory()));

export { router as pokemonRoutes };
