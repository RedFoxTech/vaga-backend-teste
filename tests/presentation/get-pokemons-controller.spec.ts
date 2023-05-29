import { Pokemon } from "../../src/domain/pokemon";
import { IGetPokemons } from "../../src/domain/useCases/get-pokemons";
import { GetPokemonsController } from "../../src/presentation/controllers/get-pokemons-controller";

describe("GetPokemonsController", () => {
  const makeGetPokemons = () => {
    class GetPokemons implements IGetPokemons {
      async get(): Promise<Pokemon[]> {
        return [];
      }
    }
    return new GetPokemons();
  };
  const makeSut = () => {
    const getPokemons = makeGetPokemons();
    return {
      getPokemons,
      sut: new GetPokemonsController(getPokemons),
    };
  };
  it("should call get method", async () => {
    const { sut, getPokemons } = makeSut();
    const spy = jest.spyOn(getPokemons, "get");
    await sut.handle();
    expect(spy).toHaveBeenCalled();
  });
  it("should throw if get method throws", async () => {
    const { sut, getPokemons } = makeSut();
    jest.spyOn(getPokemons, "get").mockImplementationOnce(() => {
      throw new Error();
    });
    const toThrow = async () => {
      await sut.handle();
    };
    expect(toThrow).rejects.toThrow();
  });
});
