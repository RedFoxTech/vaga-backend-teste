import { Pokemon } from "../pokemon";

export interface IFindPokemon {
  find(id: number): Promise<Pokemon>;
}
