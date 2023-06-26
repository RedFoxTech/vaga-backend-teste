import request from "supertest";
import { app } from "../../src/infra/server";
import { mongo } from "../../src/infra/mongodb";
import { HydrateFactory } from "../../src/main/factories/useCases/hydrate-factory";
import { pokemonModel } from "../../src/infra/mongodb/models/pokemon";

describe("find-pokemon-route", () => {
  beforeAll(async () => {
    await mongo.connect(process.env.MONGO_URL as string);
    await HydrateFactory().hydrate();
  });
  it("should return 400 if invalid id is provided", async () => {
    const response = await request(app).get("/api/pokemons/invalid");
    expect(response.status).toBe(400);
  });
  it("should return 404 if pokemon does not exist", async () => {
    const response = await request(app).get("/api/pokemons/5454874");
    expect(response.status).toBe(404);
  });
  it("should return the correct pokemon if the id provided exist", async () => {
    const pokemon = await pokemonModel.findOne({ id: 1 });
    const response = await request(app).get("/api/pokemons/1");
    expect(response.body.id).toEqual(pokemon.id);
  });
});
