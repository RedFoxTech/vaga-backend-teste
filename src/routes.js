import { Router } from "express";
import { xlsConvertToJson } from "./services/excelToJson";

import PlanImportController from "./app/controllers/PlanImportController";

const routes = Router();

routes.get("/", (req, res) => {
    return res.json(xlsConvertToJson());
});

routes.post("/import", PlanImportController.importPlanData);

export default routes;
