import { Pokemon } from "../../src/domain/pokemon";
import { ListPokemons } from "../../src/useCases/list-pokemons";
import { GetPokemonsRepository } from "../../src/useCases/protocols/get-pokemons-repository";

describe("GetPokemons", () => {
  const makeGetPokemonsRepository = () => {
    class GetPokemonsStubRepository implements GetPokemonsRepository {
      async get(): Promise<Pokemon[]> {
        return [];
      }
    }
    return new GetPokemonsStubRepository();
  };
  const makeSut = () => {
    const getPokemons = makeGetPokemonsRepository();
    return {
      getPokemons,
      sut: new ListPokemons(getPokemons),
    };
  };
  it("should call get method with corret values", async () => {
    const { sut, getPokemons } = makeSut();
    const spy = jest.spyOn(getPokemons, "get");
    await sut.list(1, {});
    expect(spy).toHaveBeenCalled();
  });
  it("should throws if get method throws", async () => {
    const { sut, getPokemons } = makeSut();
    jest.spyOn(getPokemons, "get").mockImplementationOnce(async () => {
      throw new Error();
    });
    expect(async () => await sut.list(1, {})).rejects.toThrow();
  });
});
