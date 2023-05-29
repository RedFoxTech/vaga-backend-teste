import parser from "node-xlsx";
import fs from "fs";
import { Pokemon } from "../../domain/pokemon";
(async () => {
  const parsed = parser.parse(
    fs.readFileSync(`${process.cwd()}/Pokemon Go.xlsx`)
  );
  parsed[0].data.shift();
  const parsedPokemons = parsed[0].data;
  const teste: Pokemon[] = [];
  parsedPokemons.forEach((p) => {
    // @ts-ignore
    const pokemon = new Pokemon(...p);
    teste.push({ ...pokemon });
  });
  console.log(teste[0]);
})();
