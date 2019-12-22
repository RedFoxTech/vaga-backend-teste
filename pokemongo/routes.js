'use strict'

const express = require('express')
const routes = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const { validation } = require('./app/Validators/BaseValidator')
const { PokemonStore } = require('./app/Validators/PokemonStore')

const PokemonController = require('./app/Controllers/PokemonController.js')
const CargaController = require('./app/Controllers/CargaController.js')

//Carga
routes.post('/carga', upload.single('pokemons'), CargaController.store)

routes.post('/pokemon',[PokemonStore, validation], PokemonController.store)
routes.get('/pokemon/index/:page', PokemonController.index)
routes.get('/pokemon/:id', PokemonController.show)
routes.put('/pokemon/:id',PokemonController.update)
routes.delete('/pokemon/:id', PokemonController.destroy)

module.exports = routes
