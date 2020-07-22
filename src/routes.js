import { Router } from "express";
import { xlsConvertToJson } from "./services/excelToJson";

import PokemonController from "./app/controllers/PokemonController";

const routes = Router();

routes.get("/", (req, res) => {
    return res.json(xlsConvertToJson());
});

routes.post("/import", PokemonController.importPlanData);

export default routes;
