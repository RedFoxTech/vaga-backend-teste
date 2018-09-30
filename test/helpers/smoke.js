const expect = require('chai').expect
const fs = require('fs')
const path = require('path')

const DIRECTORY = '../../'

const replaceJs = archive => archive.replace('.js', '')
const isArchive = archive => !archive.startsWith('.')

/**
 * @param  {smoke } smoke function test 
 * @param  {directory} => (DIRECTORY function helper params
 * @param  {path } PATH // file path
 * @param  {cases} cases // case test
 */
module.exports.ExecutTestSmoke = (smoke) => (PATH, cases, name) => {
    const directorys =
        fs.readdirSync(path.join(__dirname, DIRECTORY, PATH))
            .filter(isArchive)
            .map(replaceJs).sort()

    const recebe = cases.filter(value => {
        return directorys.filter(directory => value.case === directory)
    })
    recebe.map(value => {
        (value.inject) 
            ? smoke(value.smoke, require(`${DIRECTORY}${PATH}/${value.case}`)(value.inject), `${name} ${value.case.toUpperCase()}`)
            : smoke(value.smoke, require(`${DIRECTORY}${PATH}/${value.case}`), `${name} ${value.case.toUpperCase()}`)
    })
}

/**
 * @param  { Array } Case user case modulos import
 * @param  { Modulo } Modulo modulo js import
 * @param  { NameModulo } NameModulo name modulo test
 */

module.exports.Smoke = (Case, Modulo, NameModulo) => {
    const helpersFunctionsDefaut = Object.values(Modulo)

    const describeExist = helperFunction => (value, index) =>
        it(`Should exist the ${value}`, () => expect(helperFunction[index]).to.exist)

    const describeInFunction = helpersFunctions => (value, index) =>
        it(`${value} it is function`, () => expect(helpersFunctions[index]).to.be.an('function'))

    describe(`${NameModulo} test smoke`, () => {
        context('It is function', () => Case.map(describeInFunction(helpersFunctionsDefaut)))
        context('Should exist', () => Case.map(describeExist(helpersFunctionsDefaut)))
    })
}
