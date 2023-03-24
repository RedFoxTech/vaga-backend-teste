import { PokemonDataBase } from "../data/PokemonDataBase";
import { CustomError } from "../error/CustomError";

const pokemonDatabase = new PokemonDataBase();

export class PokemonBusiness {

    gottaCatchAll = async()=>{

        try {
            
            const result = await pokemonDatabase.gottaCatchAll()
            
            return result;
        
        } catch (error:any) {
        
            throw new CustomError(error.statusCode,error.message);
            
        }
    }
}