import { FindPokemonController } from "../../../presentation/controllers/find-pokemon-controller";
import { findPokemonFactory } from "../useCases/find-pokemon-factory";

export const findPokemonControllerFactory = () => {
  return new FindPokemonController(findPokemonFactory());
};
