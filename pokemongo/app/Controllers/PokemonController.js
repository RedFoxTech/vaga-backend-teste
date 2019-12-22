'use strict'

const Pokemon = require('../Models/Pokemon')
const fs = require('fs')
const excelToJson = require('convert-excel-to-json')

class PokemonController {
  async index (req, res) {
    const perPage = 10
    const page = req.params.page || 1

    const pokemons = await Pokemon.find()
      .where(req.body)
      .skip((perPage * page) - perPage)
      .limit(perPage)

    return res.json(pokemons)
  }

  async store (req, res, next){
    try {
      const pokemon = await Pokemon.create(req.body)

      return res.json(pokemon)
    } catch (err) {
      return next(err)
    }
  }

  async show (req, res) {
    try {
      const pokemon = await Pokemon.findOne({
        _id: req.params.id
      })
  
      res.send({ pokemon }) 
    } catch (err) {
      return next(err)
    }
  }

  async update (req, res) {
    try {
      const pokemon = await Pokemon.findOne({
        _id: req.params.id
      })

      await pokemon.update(req.body)

      return res.json({
        success: true
      })
    } catch (err) {
      return next(err)
    }
  }

  async destroy (req, res) {
    try {
      await Pokemon.findOneAndDelete({
        _id: req.params.id
      })

      return res.json({
        success: true
      })
    } catch (err) {
      return next(err)
    }

  }
}

module.exports = new PokemonController()
