import { PokemomRepository } from "../../../infra/mongodb/pokemonRepository";
import { GetPokemons } from "../../../useCases/list-pokemons";

export const getPokemonsFactory = () => {
  return new GetPokemons(new PokemomRepository());
};
