import { Pokemon } from "../domain/pokemon";
import { IGetPokemons } from "../domain/useCases/get-pokemons";
import { GetPokemonsRepository } from "./protocols/get-pokemons-repository";

export class GetPokemons implements IGetPokemons {
  constructor(private readonly getPokemons: GetPokemonsRepository) {}
  async get(): Promise<Pokemon[]> {
    return await this.getPokemons.get();
  }
}
