import { Pokemon } from "../../src/domain/pokemon";
import { IFindPokemon } from "../../src/domain/useCases/find-pokemon";
import { FindPokemonController } from "../../src/presentation/controllers/find-pokemon-controller";
import { pokemons } from "../infra/mocks/pokemons";

describe("FindPokemonController", () => {
  const request = {
    body: {},
    params: {
      id: 325,
    },
    query: {},
  };
  const makeFindPokemons = () => {
    class FindPokemom implements IFindPokemon {
      async find(): Promise<Pokemon | void> {
        return pokemons[0];
      }
    }
    return new FindPokemom();
  };
  const makeSut = () => {
    const findPokemon = makeFindPokemons();
    return {
      findPokemon,
      sut: new FindPokemonController(findPokemon),
    };
  };
  it("should call find method with correct value", async () => {
    const { sut, findPokemon } = makeSut();
    const spy = jest.spyOn(findPokemon, "find");
    await sut.handle(request);
    expect(spy).toHaveBeenCalledWith(request.params.id);
  });
  it("should return 400 if invalid id is provided", async () => {
    const { sut } = makeSut();
    const response = await sut.handle({
      ...request,
      params: { id: "invalid_id" },
    });
    expect(response.statusCode).toBe(400);
  });
  it("should return 404 if find method returns void", async () => {
    const { sut, findPokemon } = makeSut();
    jest.spyOn(findPokemon, "find").mockImplementationOnce(async () => {
      return;
    });
    const response = await sut.handle(request);
    expect(response.statusCode).toBe(404);
  });
  it("should shoul return 200 and the same value as find method", async () => {
    const { sut } = makeSut();
    const response = await sut.handle(request);
    expect(response.statusCode).toBe(200);
    expect(response.data).toBe(pokemons[0]);
  });
});
