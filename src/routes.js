import { Router } from "express";
import { xlsConvertToJson } from "./services/excelToJson";

const routes = Router();

routes.get("/", (req, res) => {
    return res.json(xlsConvertToJson());
});

export default routes;
