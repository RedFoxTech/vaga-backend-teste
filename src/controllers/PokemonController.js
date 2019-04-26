const mongoose = require('mongoose');


const Pokemon = mongoose.model('pokemon');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const pokemon = await Pokemon.paginate({}, { page: page, limit: 10 });

        return res.json(pokemon);
    },


    async show(req, res) {
        const Pokemon = await Pokemon.findById(req.params.id);

        return res.json(pokemon);
    },

    async store(req, res) {
        const Pokemon = await Pokemon.create(req.body);

        return res.json(pokemon);
    },

    async update(req, res) {
        const Pokemon = await Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(pokemon);


    },

    async destroy(req, res) {
        await Pokemon.findByIdAndRemove(req.params.id);

        return res.send();

    },
};



