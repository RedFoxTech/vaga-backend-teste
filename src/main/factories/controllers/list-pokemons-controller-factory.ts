import { ListPokemonsController } from "../../../presentation/controllers/list-pokemons-controller";
import { listPokemonsFactory } from "../useCases/get-pokemons-factory";

export const listPokemonsControllerFactory = () => {
  return new ListPokemonsController(listPokemonsFactory());
};
