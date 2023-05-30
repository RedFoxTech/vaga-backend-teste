import request from "supertest";
import { app } from "../../src/infra/server";
import { mongo } from "../../src/infra/mongodb";
import { HydrateFactory } from "../../src/main/factories/useCases/hydrate-factory";
import { Pokemon } from "../../src/domain/pokemon";

describe("get-pokemons-route", () => {
  beforeAll(async () => {
    await mongo.connect(process.env.MONGO_URL as string);
    await HydrateFactory().hydrate();
  });
  it("should return 200 on sucess", async () => {
    const response = await request(app).get("/api/pokemons/list/1");
    expect(response.status).toBe(200);
  });
  it("should return a maximum of 10 pokemons", async () => {
    const response = await request(app).get("/api/pokemons/list/1");
    expect(response.body.pokemons.length).toBe(10);
  });
  it("should return only fire pokemons", async () => {
    const response = await request(app).get("/api/pokemons/list/1?type1=fire");
    let onlyFire = true;
    const body = response.body;
    body.pokemons.forEach((p: Pokemon) => {
      if (p.type1 !== "fire") {
        onlyFire = false;
      }
    });
    expect(onlyFire).toBeTruthy();
  });
  it("should return only evolved pokemons", async () => {
    const response = await request(app).get("/api/pokemons/list/1?evolved=1");
    let onlyEvolved = true;
    const body = response.body;
    body.pokemons.forEach((p: Pokemon) => {
      if (!p.evolved) {
        onlyEvolved = false;
      }
    });
    expect(onlyEvolved).toBeTruthy();
  });
  it("should return only pokemons of second generation", async () => {
    const response = await request(app).get(
      "/api/pokemons/list/1?generation=2"
    );
    let onlyGeneration2 = true;
    const body = response.body;
    body.pokemons.forEach((p: Pokemon) => {
      if (p.generation !== 2) {
        onlyGeneration2 = false;
      }
    });
    expect(onlyGeneration2).toBeTruthy();
  });
});
