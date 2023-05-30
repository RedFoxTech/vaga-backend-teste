import { Pokemon } from "../domain/pokemon";
import { IGetPokemons } from "../domain/useCases/get-pokemons";
import { Filters } from "../presentation/protocols/filters";
import { GetPokemonsRepository } from "./protocols/get-pokemons-repository";

export class GetPokemons implements IGetPokemons {
  constructor(private readonly getPokemons: GetPokemonsRepository) {}
  async get(page: number, filters: Filters): Promise<Pokemon[]> {
    return await this.getPokemons.get(page, filters);
  }
}
