const express = require('express');
const pokemonsController = require('./controllers/pokemonsController');

const router = express.Router();

router.get('/pokemons', pokemonsController.getAll);

module.exports = router;