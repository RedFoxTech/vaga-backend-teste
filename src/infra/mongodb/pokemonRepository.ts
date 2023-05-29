import { Pokemon } from "../../domain/pokemon";
import { GetPokemons } from "../../useCases/protocols/get-pokemons-repository";
import { SavePokemons } from "../../useCases/protocols/save-pokemons-repository";
import { pokemonModel } from "./models/pokemon";

export class PokemomRepository implements GetPokemons, SavePokemons {
  async get(): Promise<Pokemon[]> {
    return await pokemonModel.find();
  }
  async save(pokemons: Pokemon[]): Promise<void> {
    await pokemonModel.create(pokemons);
  }
}
