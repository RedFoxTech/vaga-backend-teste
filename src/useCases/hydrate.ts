import { IXlsxParser } from "./protocols/xlsx-parser";
import fs from "fs";
import { GetPokemonsRepository } from "./protocols/get-pokemons-repository";
import { IHydrate } from "../domain/useCases/hydrate";
import { Pokemon } from "../domain/pokemon";
import { SavePokemonsRepository } from "./protocols/save-pokemons-repository";
export class Hydrate implements IHydrate {
  constructor(
    private readonly xlsxParser: IXlsxParser,
    private readonly getPokemons: GetPokemonsRepository,
    private readonly savePokemons: SavePokemonsRepository
  ) {}
  async hydrate(): Promise<void> {
    let pokemons = await this.getPokemons.get(1, {});
    if (pokemons.length >= 1) {
      return console.log("Database already filled.");
    }
    console.log("Saving pokemons in the database...");
    pokemons = [];
    const parsedXlsx = await this.xlsxParser.parser(
      fs.readFileSync(`${process.cwd()}/Pokemon Go.xlsx`)
    );
    parsedXlsx.shift();
    parsedXlsx.forEach((p) => {
      p.shift();
      // @ts-ignore
      const pokemon = new Pokemon(...p);
      pokemons.push({ ...pokemon });
    });
    await this.savePokemons.save(pokemons);
    return console.log("Saved!");
  }
}
