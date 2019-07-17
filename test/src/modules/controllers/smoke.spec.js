const { Smoke, ExecutTestSmoke } = require('../../../helpers/smoke')

const PATH = 'src/modules/controllers'

const cases = [
    {
        case: 'pokemons',
        smoke: ['create', 'update', 'listOne', 'listAll', 'delete', 'filter']
    }
]

ExecutTestSmoke(Smoke)(PATH, cases, 'Controllers')