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
    if (filters.evolved && filters.evolved != 1 && filters.evolved != 0) {
      return { statusCode: 400, data: "Evolved param must be 0 or 1" };
    }
    const { page } = req.params;
    const pokemons = await this.getPokemons.list(page, filters);
    return { statusCode: 200, data: pokemons };
  }
}
