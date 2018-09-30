const Error = require('../errors/persistence')
module.exports = ({
    sucessCreate: res => data => res.status(201).json(data),
    error: res => data => {
        console.log('eror data: ', data)
        return res.status(500).json(data)
    },
    returnUpdate: res => data =>
        (data.nModified)
            ? res.status(200).json(Error.sucessUpdate)
            : res.status(400).json(Error.errorUpdate),
    findSuccess: res => data =>
        (data)
            ? res.status(200).json(data)
            : res.status(400).json(Error.findOneEmpty),
    deleteSucess: res => data => {
        return (data.n)
            ? res.status(200).json(Error.sucessDelete)
            : res.status(400).json(Error.errorDelete)
    },
    findAllSuccess: res => data =>
        (data.docs.length > 0)
            ? res.status(200).json(data)
            : res.status(400).json(Error.findOneEmpty)
})
