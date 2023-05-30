import { Pokemon } from "../../src/domain/pokemon";
import { FindPokemon } from "../../src/useCases/find-pokemon";
import { GetPokemonsRepository } from "../../src/useCases/protocols/get-pokemons-repository";
import { pokemons } from "../infra/mocks/pokemons";

describe("FindPokemon", () => {
  const makeGetPokemonsRepository = () => {
    class GetPokemonsStubRepository implements GetPokemonsRepository {
      async get(): Promise<Pokemon[]> {
        return [pokemons[0]];
      }
    }
    return new GetPokemonsStubRepository();
  };
  const makeSut = () => {
    const getPokemons = makeGetPokemonsRepository();
    return {
      getPokemons,
      sut: new FindPokemon(getPokemons),
    };
  };
  it("should call get method with correct value", async () => {
    const { sut, getPokemons } = makeSut();
    const spy = jest.spyOn(getPokemons, "get");
    await sut.find(200);
    expect(spy).toHaveBeenCalledWith(1, { id: 200 });
  });
  it("should return the same value as get method", async () => {
    const { sut } = makeSut();
    const pokemon = await sut.find(200);
    expect(pokemon).toBe(pokemons[0]);
  });
  it("should throw if get method throws", async () => {
    const { sut, getPokemons } = makeSut();
    jest.spyOn(getPokemons, "get").mockImplementationOnce(() => {
      throw new Error();
    });
    await expect(sut.find(200)).rejects.toThrow();
  });
});
