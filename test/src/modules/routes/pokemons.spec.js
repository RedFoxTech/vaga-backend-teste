require('dotenv').load()
const app = require('../../../../app')

const { IntegrationRoutes } = require('../../../helpers/integrationRoutes')

const url = '/v1/pokemons'

// object create
const pokemon = {
    "evolved": 0,
    "stat_total": 290,
    "atk": 116,
    "def": 96,
    "sta": 78,
    "legendary": 0,
    "aquireable": 1,
    "spawns": 1,
    "regional": 0,
    "raidable": 0,
    "hatchable": 5,
    "shiny": 0,
    "nest": 1,
    "new": 0,
    "not_gettable": 0,
    "future_evolve": 0,
    "row": "4",
    "name": "Charmander",
    "pokedex_number": "4",
    "img_name": "4",
    "generation": 1,
    "evolution_stage": 1,
    "family_id": 2,
    "cross_gen": 0,
    "type_1": "fire",
    "type_2": "12312",
    "weather_1": "Sunny/clear",
    "weather_2": "",
    "cp_40": 831,
    "cp_39": 819
}

const test_pokemon = {
    describe: `Routes Pokemons`,
    object: {
        get: [
            {
                it: {
                    describe: `Route get ${url}`,
                    description: `should return register`,
                    url: url,
                    be: 'object',
                    status: 200,
                    body: {}
                }
            }
        ],
        post: [
            {
                it: {
                    describe: `Route post ${url}`,
                    description: `should create new Pokemon`,
                    url: url,
                    be: 'object',
                    status: 201,
                    body: pokemon
                }
            }
        ],
        put: [],
        delete: []
    }
}
IntegrationRoutes(app)(test_pokemon)
