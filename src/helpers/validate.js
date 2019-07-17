const Hoek = require('hoek')
const mongoose = require('mongoose')
module.exports = ({
    requestRequired: (req, required, Errors) => {
        required.map((key, index) => {
            req.assert(required[index], Errors[key]).notEmpty()
        })
        return req.validationErrors()
    },

    validateBody: (object, ...body) => returnObject => {
        object = Hoek.merge({}, object)
        body.map(key => {
            if (object[key] !== undefined) returnObject[key] = object[key]
            return returnObject
        })
    },

    isId: (id) => (mongoose.Types.ObjectId.isValid(id)),

    isNumberValidatePaginate: Errors => (req, res, next) => {
        if (req.query.page && isNaN(req.query.page)) return res.status(400).json([Errors])
        if (req.query.limit && isNaN(req.query.limit)) return res.status(400).json(Errors)
        next()
    },

    requestOptional: (req, required, Errors) => {
        required.map((key, index) => {
            req.assert(required[index], Errors[key]).optional().notEmpty()
        })
        return req.validationErrors()
    }
})
