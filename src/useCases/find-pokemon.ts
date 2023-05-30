import { Pokemon } from "../domain/pokemon";
import { IFindPokemon } from "../domain/useCases/find-pokemon";
import { GetPokemonsRepository } from "./protocols/get-pokemons-repository";

export class FindPokemon implements IFindPokemon {
  constructor(private readonly pokemonRepository: GetPokemonsRepository) {}
  async find(id: number): Promise<void | Pokemon> {
    const pokemon = await this.pokemonRepository.get(1, { id: id });
    return pokemon[0];
  }
}
