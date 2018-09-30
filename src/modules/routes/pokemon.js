module.exports = app => {
    const url = `${process.env.API_VERSION}/pokemons`

    const { isId, create: validateCreate, update: validateUpdate, validatePaginate } = require('../validates/pokemon')
    const { create, update, listAll, listOne, delete: remove, filter } = require('../controllers/pokemons')

    app.route(`${url}/filter`)
        .get(filter)
    app.route(url)
        .post(validateCreate, create)
        .get(validatePaginate, listAll)

    app.route(`${url}/:_id`)
        .get(isId, listOne)
        .put(isId, validateUpdate, update)
        .delete(isId, remove)
}
