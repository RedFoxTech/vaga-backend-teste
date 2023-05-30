import { PokemomRepository } from "../../../infra/mongodb/pokemonRepository";
import { ListPokemons } from "../../../useCases/list-pokemons";

export const listPokemonsFactory = () => {
  return new ListPokemons(new PokemomRepository());
};
