import express from "express";
import { mongo } from "../mongodb";
import { config } from "dotenv";
import { HydrateFactory } from "../../main/factories/useCases/hydrate-factory";
import { pokemonRoutes } from "./routes/pokemons-routes";

(async () => {
  config();
  const app = express();
  await mongo.connect(
    (process.env.MONGO as string) || "mongodb://db:27017/vaga-backend"
  );
  await HydrateFactory().hydrate();
  const port = process.env.PORT || 3000;
  app.use("/api/pokemons", pokemonRoutes);
  app.listen(port);
  console.log("Server running on port " + port);
})();
