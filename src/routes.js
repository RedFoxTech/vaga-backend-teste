const express = require('express');
const router = express.Router();

const Pokemon = require('./models/Pokemon');

Pokemon.methods(['get', 'put', 'post', 'delete']);
Pokemon.register(router, '/pokemons');

module.exports = router;