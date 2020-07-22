import Pokemon from "../models/Pokemon";
import { xlsConvertToJson } from "../../services/excelToJson";

class PlanImportController {
    async importPlanData(req, res) {
        //VERIFICA SE JÁ EXISTEM DADOS IMPORTADOS NO BANCO
        const checkData = await Pokemon.findAll();
        if (checkData.length !== 0) {
            return res.status(401).json({
                error: "Os dados já foram importados no banco de dados",
            });
        }
        try {
            const plan = xlsConvertToJson();
            plan.map(async (item) => {
                await Pokemon.create(item);
            });
            return res.json(plan);
        } catch (error) {
            return res.json(error);
        }
    }
}

export default new PlanImportController();
