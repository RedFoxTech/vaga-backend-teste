'use strict';

const mongoose = require('mongoose');
const Schema  =  mongoose.Schema;
const restful = require('node-restful');


const schema =  new Schema({
   
},{
    collection: 'Pokemons'
});


module.exports = restful.model('pokemons-db', schema);