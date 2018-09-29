'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    'mongodb://NicolasGuarino:nicolas123@ds054289.mlab.com:54289/pokemon-db'
);



const pokemons = require('./routes/pokemons');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', pokemons);

module.exports = app;