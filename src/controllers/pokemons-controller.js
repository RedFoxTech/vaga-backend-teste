'use strict';

const Pokemons = require('./../models/model-pokemon');

exports.getAllPokemons = (req, res, next) => {
    Pokemons.find({
    }).then(data => {
        res.status(200).send(data);
    }).catch (ex => {
        res.status(400).send({
            message: "Error Throw Exception",
            data: ex
        });
    });
}



exports.getById = (req, res, next) => {
    Pokemons.find({
        Row: parseInt(req.params.id)
    })
    .then(data => {
        res.status(200).send(data);
    }).catch (ex => {
        res.status(400).send({
            message: "Error Throw Exception",
            data: ex
        });
    });
}


exports.getByName = (req, res, next) => {
    Pokemons.find({
        "Name": req.params.nome
    })
    .then(data => {
        res.status(200).send(data);
    }).catch (ex => {
        res.status(400).send({
            message: "Error Throw Exception",
            data: ex
        });
    });
}

exports.getByTipo = (req, res, next) => {
    Pokemons.find({
        "Type 1": req.params.type
    })
    .then(data => {
        res.status(200).send(data);
    }).catch (ex => {
        res.status(400).send({
            message: "Error Throw Exception",
            data: ex
        });
    });
}



exports.getByGeracao = (req, res, next) => {
    Pokemons.find({
        Generation: parseInt(req.params.geracao)
    })
    .then(data => {
        res.status(200).send(data);
    }).catch (ex => {
        res.status(400).send({
            message: "Error Throw Exception",
            data: ex
        });
    });
}

exports.searchByName = (req, res, next) => {
    
    Pokemons.find({
        "Name": { $regex: `/.*${req.params.buscarPokemon}.*/` }
    })
    .then(data => {
        res.status(200).send(data);
    }).catch (ex => {
        res.status(400).send({
            message: "Error Throw Exception",
            data: ex
        });
    });
}

exports.showPage = (req, res, next) => {
    
    var pageOptions = {
        pagina: parseInt(req.params.pagina) || 0,
        qtdPorPagina:parseInt(req.params.qtd) || 10
    }
    
    Pokemons.find({

    })
    .skip(pageOptions.pagina > 0 ? ((pageOptions.pagina - 1) * pageOptions.qtdPorPagina) : 0)
    .limit(pageOptions.qtdPorPagina)
    .then(data => {
        res.status(200).send(data);
    }).catch (ex => {
        res.status(400).send({
            message: "Error Throw Exception",
            data: ex
        });
    });
}


