import { PokemomRepository } from "../../../infra/mongodb/pokemonRepository";
import { FindPokemon } from "../../../useCases/find-pokemon";

export const findPokemonFactory = () => {
  return new FindPokemon(new PokemomRepository());
};
