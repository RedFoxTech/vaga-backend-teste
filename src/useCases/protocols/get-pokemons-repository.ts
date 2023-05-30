import { Pokemon } from "../../domain/pokemon";
import { Filters } from "../../presentation/protocols/filters";

export interface GetPokemonsRepository {
  get(page: number, filters: Filters): Promise<Pokemon[]>;
}
