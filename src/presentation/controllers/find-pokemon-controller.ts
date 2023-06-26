import { IFindPokemon } from "../../domain/useCases/find-pokemon";
import { Controller, Request, Response } from "../protocols/controller";

export class FindPokemonController implements Controller {
  constructor(private readonly findPokemon: IFindPokemon) {}
  async handle(request: Request): Promise<Response> {
    const id = Number(request.params.id);
    if (!id || typeof id !== "number") {
      return { statusCode: 400, data: "Invalid id provided" };
    }
    const pokemon = await this.findPokemon.find(id);
    if (!pokemon || !pokemon.id) {
      return { statusCode: 404, data: "Pokemon not found :((" };
    }
    return { statusCode: 200, data: pokemon };
  }
}
