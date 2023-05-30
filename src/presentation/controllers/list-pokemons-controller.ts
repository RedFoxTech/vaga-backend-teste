import { IListPokemons } from "../../domain/useCases/list-pokemons";
import { Controller, Request } from "../protocols/controller";

export class ListPokemonsController implements Controller {
  constructor(private readonly getPokemons: IListPokemons) {}
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
    const pokemons = await this.getPokemons.list(page, filters);
    return { statusCode: 200, data: pokemons };
  }
}
