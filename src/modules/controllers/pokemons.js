const Pokemons = require('../models/pokemon')
const { create, update, findOne, findAll, remove } = require('../../helpers/persistence')(Pokemons)
const { validateBody } = require('../../helpers/validate')
const { queryPaginate } = require('./../../helpers/transform')

module.exports.create = (req, res) => {
    try {
        const body = {}
        validateBody(
            req.body,
            'row', 'name', 'pokedex_number', 'img_name', 'generation', 'evolution_stage', 'evolved', 'family_id', 'type_1', 'type_2', 'type_2', 'weather_1',
            'weather_2', 'stat_total', 'atk', 'def', 'sta', 'legendary', 'aquireable', 'spawns', 'regional', 'raidable', 'hatchable', 'shiny', 'nest',
            'new', 'not_gettable', 'future_evolve', 'cp_40', 'cp_39'
        )(body)
        create(res)(body)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports.update = (req, res) => {
    try {
        const body = {}
        validateBody(req.body,
            'row', 'name', 'pokedex_number', 'img_name', 'generation', 'evolution_stage', 'evolved', 'family_id', 'type_1', 'type_2', 'type_2', 'weather_1',
            'weather_2', 'stat_total', 'atk', 'def', 'sta', 'legendary', 'aquireable', 'spawns', 'regional', 'raidable', 'hatchable', 'shiny', 'nest',
            'new', 'not_gettable', 'future_evolve', 'cp_40', 'cp_39'
        )(body)
        update(res)(req.params)(body)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports.listOne = async (req, res) => findOne(res)(req.params, req.query || {})

module.exports.listAll = async (req, res) => findAll(res)(req.params, queryPaginate(req.query))

module.exports.delete = async (req, res) => remove(res)(req.params)

module.exports.filter = (req, res) => {
    try {
        const query = {}
        validateBody(req.query,
            'row', 'name', 'pokedex_number', 'img_name', 'generation', 'evolution_stage', 'evolved', 'family_id', 'type_1', 'type_2', 'type_2', 'weather_1',
            'weather_2', 'stat_total', 'atk', 'def', 'sta', 'legendary', 'aquireable', 'spawns', 'regional', 'raidable', 'hatchable', 'shiny', 'nest',
            'new', 'not_gettable', 'future_evolve', 'cp_40', 'cp_39'
        )(query)
        Object.keys(query)
            .forEach(x => {
                query[x] = { $regex: query[x], $options: 'i' }
            })
        findAll(res)(query, queryPaginate(req.query))
    } catch (err) {
        res.status(500).json(err)
    }
}
