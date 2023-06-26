import { Data, IListPokemons } from "../domain/useCases/list-pokemons";
import { Filters } from "../presentation/protocols/filters";
import { GetPokemonsRepository } from "./protocols/get-pokemons-repository";

export class ListPokemons implements IListPokemons {
  constructor(private readonly getPokemons: GetPokemonsRepository) {}
  async list(page: number, filters: Filters): Promise<Data> {
    return await this.getPokemons.get(page, filters);
  }
}
