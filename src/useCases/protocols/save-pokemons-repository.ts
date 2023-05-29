import { Pokemon } from "../../domain/pokemon";

export interface SavePokemonsRepository {
  save(pokemons: Pokemon[]): Promise<void>;
}
