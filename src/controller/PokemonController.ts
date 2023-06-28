import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import { CustomError } from "../error/CustomError";

export class PokemonController {
  private pokeBusiness = new PokemonBusiness();

  public getPokemons = async (req:Request, res:Response):Promise<void> => {
    try{
      const name = req.params.name;
      const limit = Number(req.params.limit);
      const start = Number(req.params.start);
      const type = req.params.type;
     
      const pokemons = await this.pokeBusiness.getPokemons(name,start,limit,type)
      
      res.status(200).send(pokemons);
    }catch(error: any){
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  }

}