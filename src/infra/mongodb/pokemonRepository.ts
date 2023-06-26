import { Pokemon } from "../../domain/pokemon";
import { Data } from "../../domain/useCases/list-pokemons";
import { Filters } from "../../presentation/protocols/filters";
import { GetPokemonsRepository } from "../../useCases/protocols/get-pokemons-repository";
import { SavePokemonsRepository } from "../../useCases/protocols/save-pokemons-repository";
import { pokemonModel } from "./models/pokemon";

export class PokemomRepository
  implements GetPokemonsRepository, SavePokemonsRepository
{
  async get(page: number, filters: Filters): Promise<Data> {
    const totalResults = await pokemonModel.countDocuments(filters);
    const limitPerPage = 10;
    const totalPages = Math.ceil(totalResults / limitPerPage);
    const pokemons = await pokemonModel
      .find({
        ...filters,
      })
      .limit(10)
      .skip(10 * (page - 1));
    return { totalPages, pokemons };
  }
  async save(pokemons: Pokemon[]): Promise<void> {
    await pokemonModel.create(pokemons);
  }
}
