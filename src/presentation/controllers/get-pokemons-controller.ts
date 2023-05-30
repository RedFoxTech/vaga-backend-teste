import { IGetPokemons } from "../../domain/useCases/get-pokemons";
import { Controller, Request } from "../protocols/controller";
import { Filters } from "../protocols/filters";

export class GetPokemonsController implements Controller {
  constructor(private readonly getPokemons: IGetPokemons) {}
  async handle(req: Request) {
    const filtersNames = ["type1", "evolved", "generation"];
    const filters: any = {};
    filtersNames.forEach((f) => {
      if (req.query[f]) {
        filters[f] = req.query[f];
      }
    });
    console.log(filters);
    const { page } = req.params;
    const pokemons = await this.getPokemons.get(page, filters);
    return { statusCode: 200, data: pokemons };
  }
}
