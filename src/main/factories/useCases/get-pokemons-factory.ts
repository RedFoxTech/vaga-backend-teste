import { PokemomRepository } from "../../../infra/mongodb/pokemonRepository";
import { GetPokemons } from "../../../useCases/get-pokemons";

export const getPokemonsFactory = () => {
  return new GetPokemons(new PokemomRepository());
};
