const mongoose = require("mongoose");
const Pokemon = mongoose.model("Pokemon");

var getFilters = function(q) {
  let result, filter, select, limit;

  // by ATK
  if (q.substring(0, 3) == "atk") {
    let query = q.split("atk")[1];
    let start = query.trim().split("-")[0];
    let end = query.trim().split("-")[1];

    filter = { ATK: { $gt: start, $lt: end } };
    result = { filter };
  }
  // by Name
  else if (q[0] == q.match(/[a-z]/i) && q[0].toUpperCase()) {
    filter = { Name: new RegExp(q, "i") };
    select = "Name Imgname";
    limit = 1;
    result = { filter, select, limit };
  }
  // by Generations
  else if (q[0] == "+") {
    let pokemon = q.split("+")[1];
    filter = { Name: new RegExp(pokemon, "i") };
    select = "Name Generation ATK DEF Type1 Type2";
    result = { filter, select };
  }
  // by Pokedex Number
  else if (q[0] == q.match(/[0-9]/i)) {
    filter = { PokedexNumber: q };
    result = { filter };
  }

  return result;
};

const PokemonController = {
  async all(req, res) {
    const { page = 1 } = req.query;
    const { filters = null, sort = null } = req.body;

    await Pokemon.paginate(filters, { page, limit: 10, sort }, function(
      err,
      pokemons
    ) {
      if (err) return res.status(404).send({ error: err.message });

      res.json(pokemons);
    });
  },

  async search(req, res) {
    const { q, page = 1 } = req.query;
    const { sort = { Name: "asc" } } = req.body;

    const { filter, select = null, limit = 10 } = getFilters(q);

    await Pokemon.paginate(filter, { page, limit, select, sort }, function(
      err,
      pokemons
    ) {
      if (err) return res.status(404).send({ error: err.message });

      if (pokemons.docs.length == 0)
        return res.send({ message: "Sem resultados" });

      res.json(pokemons);
    });
  },

  async store(req, res) {
    await Pokemon.create(req.body, function(err, pokemon) {
      if (err) return res.status(404).send({ error: err.message });

      res.json(pokemon);
    });
  },

  async update(req, res) {
    const id = req.params.id.trim();
    const pokemon = await Pokemon.findByIdAndUpdate(id, req.body, {
      new: true
    });

    if (!pokemon) return res.send({ message: "Pokemon não encontrado" });

    res.json(pokemon);
  },

  async destroy(req, res) {
    const id = req.params.id.trim();
    await Pokemon.findByIdAndDelete(id, function(err) {
      if (err) return res.status(500).json({ error: err.message });

      res.send();
    });
  }
};

module.exports = PokemonController;
