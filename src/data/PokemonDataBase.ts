import BaseDataBase from "./BaseDataBase";
import { CustomError } from "../error/CustomError";

export class PokemonDataBase extends BaseDataBase {

    public TABLE_NAME = "Pokemon"

    // retorna todos Pokemons

gottaCatchAll = async () => {

    try {

        const result = await PokemonDataBase.connection().select("*").from(this.TABLE_NAME);

        return result;
            

    } catch (error:any) {

        throw new CustomError(error.sqlError,error.message)
            
        }
    }
}