import { Pokemon } from "../../domain/pokemon";

export interface GetPokemonsRepository {
  get(page: number): Promise<Pokemon[]>;
}
