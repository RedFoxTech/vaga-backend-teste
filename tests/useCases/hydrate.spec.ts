import { Hydrate } from "../../src/useCases/hydrate";
import { IXlsxParser } from "../../src/useCases/protocols/xlsx-parser";
import { GetPokemons } from "../../src/useCases/protocols/get-pokemons";
import { Pokemon } from "../../src/domain/pokemon";
import { parsedPokemons } from "./mocks/parsedPokemons";
import { SavePokemons } from "../../src/useCases/protocols/save-pokemons";
describe("Hydrate", () => {
  const makeGetPokemons = () => {
    class GetPokemonsStub implements GetPokemons {
      async get(): Promise<Pokemon[]> {
        return [];
      }
    }
    return new GetPokemonsStub();
  };
  const makeSavePokemons = () => {
    class SavePokemonsStub implements SavePokemons {
      async save(): Promise<void> {
        return;
      }
    }
    return new SavePokemonsStub();
  };
  const makeXlsxParser = () => {
    class XlsxParserStub implements IXlsxParser {
      async parser(): Promise<any[]> {
        return parsedPokemons;
      }
    }
    return new XlsxParserStub();
  };
  const makeSut = () => {
    const xlsxParserStub = makeXlsxParser();
    const getPokemons = makeGetPokemons();
    const savePokemons = makeSavePokemons();
    return {
      xlsxParserStub,
      getPokemons,
      savePokemons,
      sut: new Hydrate(xlsxParserStub, getPokemons, savePokemons),
    };
  };
  it("should not call xlsxParser if getPokemons dont return an empty array", async () => {
    const { sut, xlsxParserStub, getPokemons } = makeSut();
    jest.spyOn(getPokemons, "get").mockImplementationOnce(async () => [
      // @ts-ignore
      { ...new Pokemon(...parsedPokemons[0]) },
    ]);
    const spy = jest.spyOn(xlsxParserStub, "parser");
    await sut.hydrate();
    expect(spy).toHaveBeenCalledTimes(0);
  });
  it("should call xlsxParser with correct value", async () => {
    const { sut, xlsxParserStub } = makeSut();
    const spy = jest.spyOn(xlsxParserStub, "parser");
    await sut.hydrate();
    expect(spy).toHaveBeenCalled();
  });
  it("should call savePokemons with correct value", async () => {
    const { sut, savePokemons } = makeSut();
    const spy = jest.spyOn(savePokemons, "save");
    await sut.hydrate();
    const pokemons = parsedPokemons.map((p) => {
      // @ts-ignore
      const pokemon = new Pokemon(...p);
      return { ...pokemon };
    });
    expect(spy).toHaveBeenCalledWith(pokemons);
  });
});
