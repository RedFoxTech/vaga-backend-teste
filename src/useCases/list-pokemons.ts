import { Pokemon } from "../domain/pokemon";
import { IListPokemons } from "../domain/useCases/list-pokemons";
import { Filters } from "../presentation/protocols/filters";
import { GetPokemonsRepository } from "./protocols/get-pokemons-repository";

export class ListPokemons implements IListPokemons {
  constructor(private readonly getPokemons: GetPokemonsRepository) {}
  async list(page: number, filters: Filters): Promise<Pokemon[]> {
    return await this.getPokemons.get(page, filters);
  }
}
