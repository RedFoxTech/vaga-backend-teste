import { IFindPokemon } from "../../domain/useCases/find-pokemon";
import { Controller, Request, Response } from "../protocols/controller";

export class FindPokemonController implements Controller {
  constructor(private readonly findPokemon: IFindPokemon) {}
  async handle(request: Request): Promise<Response> {
    const pokemon = await this.findPokemon.find(1);
    return { statusCode: 200, data: pokemon };
  }
}
