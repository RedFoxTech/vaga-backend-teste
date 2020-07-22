import xlsx from "xlsx";
import { resolve } from "path";

export const xlsConvertToJson = () => {
    const plan = xlsx.readFile(
        resolve(__dirname, "..", "..", "PokemonGo.xlsx"),
        { cellDates: true }
    );
    const planSelected = plan.Sheets["Sheet1"];
    const data = xlsx.utils.sheet_to_json(planSelected);

    return data;
};
