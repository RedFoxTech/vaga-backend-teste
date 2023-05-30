import { Pokemon } from "../../domain/pokemon";
import { Filters } from "../../presentation/protocols/filters";
import { GetPokemonsRepository } from "../../useCases/protocols/get-pokemons-repository";
import { SavePokemonsRepository } from "../../useCases/protocols/save-pokemons-repository";
import { pokemonModel } from "./models/pokemon";

export class PokemomRepository
  implements GetPokemonsRepository, SavePokemonsRepository
{
  async get(page: number, filters: Filters): Promise<Pokemon[]> {
    return await pokemonModel
      .find({
        ...filters,
      })
      .limit(10)
      .skip(10 * page);
  }
  async save(pokemons: Pokemon[]): Promise<void> {
    await pokemonModel.create(pokemons);
  }
}
