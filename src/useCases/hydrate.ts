import { IXlsxParser } from "./protocols/xlsx-parser";
import fs from "fs";
import { GetPokemons } from "./protocols/get-pokemons";
import { IHydrate } from "../domain/useCases/hydrate";
import { Pokemon } from "../domain/pokemon";
import { SavePokemons } from "./protocols/save-pokemons";
export class Hydrate implements IHydrate {
  constructor(
    private readonly xlsxParser: IXlsxParser,
    private readonly getPokemons: GetPokemons,
    private readonly savePokemons: SavePokemons
  ) {}
  async hydrate(): Promise<void> {
    let pokemons = await this.getPokemons.get();
    if (pokemons.length >= 1) {
      return console.log("Database already filled.");
    }
    console.log("Saving pokemons in the database...");
    pokemons = [];
    const parsedXlsx = await this.xlsxParser.parser(
      fs.readFileSync(`${process.cwd()}/Pokemon Go.xlsx`)
    );
    parsedXlsx.forEach((p) => {
      // @ts-ignore
      const pokemon = new Pokemon(...p);
      pokemons.push({ ...pokemon });
    });
    await this.savePokemons.save(pokemons);
    return console.log("Saved!");
  }
}
