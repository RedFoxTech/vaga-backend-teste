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
        Name: req.params.nome
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
        "Type 1": req.params.tipo
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

exports.buscar = (req, res, next) => {
    
    Pokemons.find({
        "Name": {$regex: `.*${req.params.buscar}.*`} 
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
    let pagina = parseInt(req.params.pagina);
    let qtdPorPagina = parseInt(req.params.qtd);
    let pagina_atual = (pagina * qtdPorPagina);
    
    Pokemons.find({

    })
    .skip(pagina_atual)
    .limit(10)
    .then(data => {
        res.status(200).send(data);
    }).catch (ex => {
        res.status(400).send({
            message: "Error Throw Exception",
            data: ex
        });
    });
}


