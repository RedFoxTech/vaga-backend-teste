import { Request,Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";

const pokemonBusiness = new PokemonBusiness();

export class PokemonController {
    gottaCatchAll = async (req: Request, res: Response) => {
        try {
            const result = await pokemonBusiness.gottaCatchAll()

            res.status(200).send(result);
            
        } catch (error:any) {
           
            res.status(400).send({error:error.message});}
            
        }
}