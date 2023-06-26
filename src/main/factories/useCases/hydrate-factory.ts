import { XlsxParser } from "../../../infra/excelParser/xlsxParser";
import { PokemomRepository } from "../../../infra/mongodb/pokemonRepository";
import { Hydrate } from "../../../useCases/hydrate";

export const HydrateFactory = () => {
  return new Hydrate(
    new XlsxParser(),
    new PokemomRepository(),
    new PokemomRepository()
  );
};
