'use strict'

const Pokemon = require('../Models/Pokemon')
const fs = require('fs')
const excelToJson = require('convert-excel-to-json')

class CargaController {
  async store (req, res, next) {
    const file = req.file

    try {
      const arr = excelToJson({
        source: fs.readFileSync(file.path), // fs.readFileSync return a Buffer
        header: {
          rows: 1
        },
        columnToKey: {
          A: 'row',
          B: 'name',
          C: 'pokedex_number',
          D: 'img_name',
          E: 'generation',
          F: 'evolution_stage',
          G: 'evolved',
          H: 'family_id',
          I: 'cross_gen',
          J: 'type_1',
          K: 'type_2',
          L: 'wheather_1',
          M: 'wheather_2',
          N: 'stat_total',
          O: 'atk',
          P: 'def',
          Q: 'sta',
          R: 'legendary',
          S: 'aquireable',
          T: 'spawns',
          U: 'regional',
          V: 'raidable',
          W: 'hatchable',
          X: 'shiny',
          Y: 'nest',
          Z: 'new',
          AA: 'not_Gettable',
          AB: 'futute_evolve',
          AC: 'forty',
          AD: 'thirty_nine'
        }
      })
  
      for (const i of arr.Sheet1) {
        await Pokemon.create(i)
      }
  
      return res.json({
        success: true
      })
    } catch (err) {
      return next(err)
    }
  }
}

module.exports = new CargaController()