import { Router } from "express";
import { ControllerAdapter } from "../adapters/controller-adapter";
import { getPokemonsControllerFactory } from "../../../main/factories/controllers/get-pokemons-controller-factory";
const router = Router();
router.get("/list/:page", ControllerAdapter(getPokemonsControllerFactory()));

export { router as pokemonRoutes };
