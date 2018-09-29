'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/pokemons-controller');

// Ex: http://localhost:3000/pokemons/
router.get('/pokemons', controller.getAllPokemons);

// Ex: http://localhost:3000/pokemons/10
router.get('/pokemons/:id', controller.getById);

// Ex: http://localhost:3000/pokemons/nome/Venusaur
router.get('/pokemons/nome/:nome', controller.getByName);

// Ex: http://localhost:3000/pokemons/geracao/2
router.get('/pokemons/geracao/:geracao', controller.getByGeracao);

//Ex:  http://localhost:3000/pokemons/2/30
router.get('/pokemons/:pagina/:qtd', controller.showPage);

//Ex:  http://localhost:3000/pokemons/busca/:busca
router.get('/pokemons/busca/:buscar', controller.buscar);

module.exports = router;