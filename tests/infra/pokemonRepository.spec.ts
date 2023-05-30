import { mongo } from "../../src/infra/mongodb";
import { pokemonModel } from "../../src/infra/mongodb/models/pokemon";
import { PokemomRepository } from "../../src/infra/mongodb/pokemonRepository";
import { pokemons } from "./mocks/pokemons";

describe("PokemomRepository", () => {
  const makeSut = () => {
    return new PokemomRepository();
  };
  beforeAll(async () => {
    await mongo.connect(process.env.MONGO_URL as string);
    await pokemonModel.deleteMany();
  });
  describe("getPokemons", () => {
    it("should call find method", async () => {
      const { get } = makeSut();
      const spy = jest.spyOn(pokemonModel, "find");
      await get(1, {});
      expect(spy).toHaveBeenCalled();
    });
    it("should return the same value as find method", async () => {
      const { get } = makeSut();
      jest.spyOn(pokemonModel, "find");
      const pokemons = await get(1, {});
      expect(pokemons).toEqual([]);
    });
  });
  describe("savePokemons", () => {
    it("should call create method with correct value", async () => {
      const { save } = makeSut();
      const spy = jest.spyOn(pokemonModel, "create");
      await save(pokemons);
      expect(spy).toHaveBeenCalledWith(pokemons);
    });
    it("should save an array of pokemons", async () => {
      const { save } = makeSut();
      await pokemonModel.deleteMany();
      jest.spyOn(pokemonModel, "create");
      await save(pokemons);
      const pokemonsSaved = await pokemonModel.find();
      expect(pokemonsSaved.length).toBe(pokemons.length);
    });
  });
});
