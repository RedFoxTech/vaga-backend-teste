import { Router } from "express";

import PlanImportController from "./app/controllers/PlanImportController";
import PokemonController from "./app/controllers/PokemonController";

const routes = Router();

routes.post("/import", PlanImportController.importPlanData);

routes.get("/pokemons", PokemonController.index);
routes.get("/pokemons/:id", PokemonController.show);
routes.put("/pokemons/:id", PokemonController.update);
routes.post("/pokemons", PokemonController.store);
routes.delete("/pokemons/:id", PokemonController.delete);

export default routes;
