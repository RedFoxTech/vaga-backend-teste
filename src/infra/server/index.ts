import express from "express";
import { config } from "dotenv";
import { pokemonRoutes } from "./routes/pokemons-routes";
import { errorHandler } from "./error-handler";
require("express-async-errors");
config();
export const app = express();
app.use("/api/pokemons", pokemonRoutes);
app.use(errorHandler);
