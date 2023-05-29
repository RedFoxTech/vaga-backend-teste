import { Pokemon } from "../../domain/pokemon";

export interface GetPokemonsRepository {
  get(): Promise<Pokemon[]>;
}
