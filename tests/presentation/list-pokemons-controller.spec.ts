import { Data, IListPokemons } from "../../src/domain/useCases/list-pokemons";
import { ListPokemonsController } from "../../src/presentation/controllers/list-pokemons-controller";
import { pokemons } from "../infra/mocks/pokemons";

describe("ListPokemonsController", () => {
  const request = { body: {}, params: {}, query: {} };
  const makeListPokemonsController = () => {
    class ListPokemons implements IListPokemons {
      async list(): Promise<Data> {
        return { totalPages: 1, pokemons: [pokemons[0]] };
      }
    }
    return new ListPokemons();
  };
  const makeSut = () => {
    const getPokemons = makeListPokemonsController();
    return {
      getPokemons,
      sut: new ListPokemonsController(getPokemons),
    };
  };
  it("should call get method", async () => {
    const { sut, getPokemons } = makeSut();
    const spy = jest.spyOn(getPokemons, "list");
    await sut.handle(request);
    expect(spy).toHaveBeenCalled();
  });
  it("should throw if get method throws", async () => {
    const { sut, getPokemons } = makeSut();
    jest.spyOn(getPokemons, "list").mockImplementationOnce(() => {
      throw new Error();
    });
    const toThrow = async () => {
      await sut.handle(request);
    };
    expect(toThrow).rejects.toThrow();
  });
  it("should should return 200 on sucess", async () => {
    const { sut } = makeSut();
    const response = await sut.handle(request);
    expect(response.statusCode).toBe(200);
  });
});
