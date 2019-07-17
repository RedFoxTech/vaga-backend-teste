
const { Smoke, ExecutTestSmoke } = require('../../../helpers/smoke')

const PATH = 'src/modules/validates'

const cases = [
    {
        case: 'pokemon',
        smoke: ['create', 'isId', 'validatePaginate', 'update']
    }
]

ExecutTestSmoke(Smoke)(PATH, cases, 'Validates')