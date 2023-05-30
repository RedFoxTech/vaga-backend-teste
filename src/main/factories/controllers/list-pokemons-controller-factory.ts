import { ListPokemonsController } from "../../../presentation/controllers/list-pokemons-controller";
import { getPokemonsFactory } from "../useCases/get-pokemons-factory";

export const listPokemonsControllerFactory = () => {
  return new ListPokemonsController(getPokemonsFactory());
};
