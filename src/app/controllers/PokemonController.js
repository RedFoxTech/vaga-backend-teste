import Pokemon from "../models/Pokemon";
import { xlsConvertToJson } from "../../services/excelToJson";

class PokemonController {
    importPlanData(req, res) {
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

export default new PokemonController();
