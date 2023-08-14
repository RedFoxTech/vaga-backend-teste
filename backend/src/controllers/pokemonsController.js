const pokemonsModel = require('../models/pokemonsModel')

const getAll = async (req, res) => {
    const pokemons = await pokemonsModel.getAll();
    return res.status(200).json(pokemons);
};

module.exports = {
    getAll
};