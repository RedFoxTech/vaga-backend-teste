import { Filters } from "../../presentation/protocols/filters";
import { Pokemon } from "../pokemon";

export interface IGetPokemons {
  get(page: number, filters: Filters): Promise<Pokemon[]>;
}
