const connection = require('./connection');

const getAll = async () => {
    const pokemons = await connection.execute('SELECT * FROM pokemons');
    return pokemons;
};

module.exports = {
    getAll
}