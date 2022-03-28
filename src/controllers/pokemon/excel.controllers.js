const db = require("../../models");
const Pokemon = db.pokemons;
const readXlsxFile = require("read-excel-file/node");
const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }
    let path =
      __basedir + "/resources/static/assets/uploads/" + req.file.filename;
    readXlsxFile(path).then((rows) => {
      // skip header
      rows.shift();
      let pokemons = [];
      rows.forEach((row) => {
        let pokemon = {
          id: row[0],
          name: row[1],
          pokedex_number: row[2],
          img_name: row[3],
          generation: row[4],
          evolution_stage: row[5],
          evolved: row[6],
          family_id: row[7],
          cross_gen: row[8],
          type_1: row[9],
          type_2: row[10],
          wether_1: row[11],
          wether_2: row[12],
          stat_total: row[13],
          atk: row[14],
          def: row[15],
          sta: row[16],
          legendary: row[17],
          aquireable: row[18],
          spawns: row[19],
          regional: row[20],
          raidable: row[21],
          hatchable: row[22],
          shiny: row[23],
          nest: row[24],
          new: row[25],
          not_gettable: row[26],
          future_evolve: row[27],
          '100%_cp_@40': row[28],
          '100%_cp_@39': row[29],
        };
        pokemons.push(pokemon);
      });
      Pokemon.bulkCreate(pokemons)
        .then(() => {
          res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};
const getPokemons = (req, res) => {
  Pokemon.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving pokemons.",
      });
    });
};
module.exports = {
  upload,
  getPokemons,
};