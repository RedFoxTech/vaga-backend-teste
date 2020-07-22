import { Router } from "express";

import PlanImportController from "./app/controllers/PlanImportController";
import PokemonController from "./app/controllers/PokemonController";

const routes = Router();

routes.post("/import", PlanImportController.importPlanData);

routes.get("/pokemons", PokemonController.index);
routes.get("/pokemons/:id", PokemonController.show);

export default routes;
