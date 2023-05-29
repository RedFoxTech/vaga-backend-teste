import { Pokemon } from "../pokemon";

export interface IGetPokemons {
  get(): Promise<Pokemon[]>;
}
