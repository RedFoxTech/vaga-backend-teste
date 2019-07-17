const sinon = require('sinon')
const { Smoke, ExecutTestSmoke } = require('../../helpers/smoke')

const PATH = 'src/helpers'

const cases = [
    {
        case: 'persistence',
        smoke: ['create', 'update', 'findOne', 'findAll', 'remove'],
        inject: sinon.spy()
    },
    {
        case: 'transform',
        smoke: ['queryPaginate']
    },
    {
        case: 'validate',
        smoke: ['requestRequired', 'validateBody', 'isId', 'isNumberValidatePaginate', 'requestOptional']
    },
    {
        case: 'returnObject',
        smoke: ['sucessCreate', 'returnUpdate', 'findSuccess', 'deleteSucess', 'findAllSuccess']
    },
  
]

ExecutTestSmoke(Smoke)(PATH, cases, 'Helpers')