import {Request, Response} from "express";
import { app } from "./app";
import { PokemonController } from "./controller/PokemonController";

const pokemon = new PokemonController().getPokemons

app.get("/pokemon/:name/:type/:start/:limit", (req:Request, res:Response) => pokemon(req,res))