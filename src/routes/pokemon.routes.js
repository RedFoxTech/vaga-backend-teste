const express = require("express");
const router = express.Router();
const excelController = require("../controllers/pokemon/excel.controllers");
const upload = require("../middlewares/upload");
let routes = (app) => {
  router.post("/upload", upload.single("file"), excelController.upload);
  router.get("/pokemon", excelController.getPokemons);
  app.use("/api/excel", router);
};
module.exports = routes;