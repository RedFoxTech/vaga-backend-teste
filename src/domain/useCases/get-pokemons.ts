import { Pokemon } from "../pokemon";

export interface IGetPokemons {
  get(page: number): Promise<Pokemon[]>;
}
