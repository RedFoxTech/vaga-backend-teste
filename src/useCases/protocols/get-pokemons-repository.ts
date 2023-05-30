import { Data } from "../../domain/useCases/list-pokemons";
import { Filters } from "../../presentation/protocols/filters";

export interface GetPokemonsRepository {
  get(page: number, filters: Filters): Promise<Data>;
}
