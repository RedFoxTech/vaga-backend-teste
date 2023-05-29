import { IGetPokemons } from "../../domain/useCases/get-pokemons";
import { Controller, Request } from "../protocols/controller";

export class GetPokemonsController implements Controller {
  constructor(private readonly getPokemons: IGetPokemons) {}
  async handle(req: Request) {
    const { page } = req.params;
    const pokemons = await this.getPokemons.get(page);
    return { statusCode: 200, data: pokemons };
  }
}
