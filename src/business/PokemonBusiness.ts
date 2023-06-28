import { PokeDatabase } from "../data/PokeDatabase";
import { CustomError } from "../error/CustomError";
import { PokemonSQL } from "../model/PokemonModel";

export class PokemonBusiness {
  private pokeDatabase = new PokeDatabase();

  public getPokemons = async (name:string, start:number, limit:number, type:string ):Promise<PokemonSQL[]> => {
    try{
  
      let pokemon:PokemonSQL[] = []
      const allPokemons = await this.pokeDatabase.getAllPokemons();
      const findPokemonWhitName = allPokemons.find( poke => poke.Name.toLowerCase() === name.toLowerCase())
      const findPokemonWhitType = allPokemons.find( poke => poke.Type_1.toLowerCase() === type.toLowerCase() || poke.Type_2 === type.toLocaleLowerCase())
      
      if(name !== ":name" && !name.includes(":") && findPokemonWhitName) {
        //filtragem por nome
        pokemon.push(findPokemonWhitName)
      };
      if(!findPokemonWhitName && findPokemonWhitType ){
        allPokemons.map( poke => { //filtragem pelo tipo
          poke.Type_1 === type.toLocaleLowerCase() || poke.Type_2 === type.toLocaleLowerCase()?
            pokemon.push(poke) : {}
        })
      };
      if(!findPokemonWhitName && start || limit){//Paginação... 
        //OBS:nao sei se isso se enquandra como paginação mas foi assim que fiz
        if(isNaN(limit) || isNaN(start)){
          throw new CustomError(400, "incorrect 'start' or 'limit' parameter")
        }else if(start > allPokemons.length){
          throw new CustomError(409, "'start' has exceeded the pokemon limit")
        }
        allPokemons.map( (poke) => {
          if(poke.Pokedex_number >= start && poke.Pokedex_number <= limit){
            pokemon.push(poke)
          }
        })
      }else{// caso nenhum parametro seja passado, ira retornar todos os pokemons
        pokemon = [...allPokemons]
      }
      return pokemon;

    }catch(error: any){
      throw new CustomError(error.statusCode, error.message)
    }
  }

}