import { Pokemon } from "../../domain/pokemon";

export interface GetPokemons {
  get(): Promise<Pokemon[]>;
}
