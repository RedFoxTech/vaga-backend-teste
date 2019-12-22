'use strict'

const { check, body } = require('express-validator')

const PokemonStore = [
  check('row').isNumeric(),      
  check('name').isString(),        
  check('pokedex_number').isNumeric(), 
  check('img_name').isString(),    
  check('generation').isNumeric(),
  check('evolution_stage').isString(),
  check('evolved').isNumeric(),      
  check('family_id').isNumeric(),
  check('cross_gen').isNumeric(),
  check('type_1').isString(),
  check('type_2').isString(),
  check('wheather_1').isString(),
  check('wheather_2').isString(),
  check('stat_total').isNumeric(),
  check('atk').isNumeric(),
  check('def').isNumeric(),
  check('sta' ).isNumeric(),
  check('legendary').isNumeric(),
  check('aquireable').isNumeric(),
  check('spawns').isNumeric(),
  check('regional').isNumeric(),
  check('raidable').isNumeric(),
  check('hatchable').isNumeric(),
  check('shiny').isNumeric(),
  check('nest').isNumeric(),
  check('new').isNumeric(),
  check('not_Gettable').isNumeric(),
  check('futute_evolve').isNumeric(),
  check('forty').isNumeric(),
  check('thirty_nine').isNumeric(),
]

module.exports = {
  PokemonStore
}
