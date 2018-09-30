const Errors = require('../../errors/pokemon')
const { requestRequired, requestOptional, isId, isNumberValidatePaginate } = require('../../helpers/validate')

module.exports.create = (req, res, next) => {
    const required = [
        'row', 'name', 'pokedex_number', 'img_name', 'generation', 'evolution_stage', 'evolved', 'family_id', 'type_1', 'type_2', 'type_2', 'weather_1',
        'weather_2', 'stat_total', 'atk', 'def', 'sta', 'legendary', 'aquireable', 'spawns', 'regional', 'raidable', 'hatchable', 'shiny', 'nest',
        'new', 'not_gettable', 'future_evolve', 'cp_40', 'cp_39'
    ]
    const error = requestRequired(req, required, Errors)
    error ? res.status(400).json(error) : next()
}

module.exports.isId = (req, res, next) => isId(req.params._id) ? next() : res.status(400).json([Errors.isId])

module.exports.validatePaginate = isNumberValidatePaginate(Errors.notNumber)

module.exports.update = (req, res, next) => {
    const required = [
        'row', 'name', 'pokedex_number', 'img_name', 'generation', 'evolution_stage', 'evolved', 'family_id', 'type_1', 'type_2', 'type_2', 'weather_1',
        'weather_2', 'stat_total', 'atk', 'def', 'sta', 'legendary', 'aquireable', 'spawns', 'regional', 'raidable', 'hatchable', 'shiny', 'nest',
        'new', 'not_gettable', 'future_evolve', 'cp_40', 'cp_39'
    ]
    const error = requestOptional(req, required, Errors)
    error ? res.status(400).json(error) : next()
}
