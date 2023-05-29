import { IGetPokemons } from "../../domain/useCases/get-pokemons";

export class GetPokemonsController {
  constructor(private readonly getPokemons: IGetPokemons) {}
  async handle() {
    return await this.getPokemons.get();
  }
}
