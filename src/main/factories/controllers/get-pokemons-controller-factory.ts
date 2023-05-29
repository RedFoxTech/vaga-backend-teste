import { GetPokemonsController } from "../../../presentation/controllers/get-pokemons-controller";
import { getPokemonsFactory } from "../useCases/get-pokemons-factory";

export const getPokemonsControllerFactory = () => {
  return new GetPokemonsController(getPokemonsFactory());
};
