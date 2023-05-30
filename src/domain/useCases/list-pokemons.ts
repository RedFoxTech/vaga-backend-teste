import { Filters } from "../../presentation/protocols/filters";
import { Pokemon } from "../pokemon";

export interface IListPokemons {
  list(page: number, filters: Filters): Promise<Pokemon[]>;
}
