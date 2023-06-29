import { CustomError } from "../error/CustomError";
import { PokemonSQL } from "../model/PokemonModel";
import { BaseDatabase } from "./BaseDatabase";

export class PokeDatabase extends BaseDatabase {
  public getAllPokemons = async ():Promise<PokemonSQL[]> => {
    try {
      return await PokeDatabase.connection("Pokemon")
    }catch(error:any){
      throw new CustomError(error.statusCode, error.message)
    }
  };
}