import { Pokemon } from "../../domain/pokemon";

export interface SavePokemons {
  save(pokemons: Pokemon[]): Promise<void>;
}
