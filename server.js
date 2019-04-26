const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Excel = require('exceljs');
const mongoXlsx = require('mongo-xlsx');
const pokemonModel = require('./src/models/Pokemon.js');

mongoXlsx.xlsx2MongoData("./PokemonGo.xlsx", pokemonModel, function (err, mongoData) {
    console.log('Mongo data:', mongoData);
});

const workbook = new Excel.Workbook();
workbook.csv.readFile("PokemonGo.xlsx").then(function (worksheet) {

});

mongoose.connect('mongodb://localhost/rest_teste', ({ useNewUrlParser: true }));

const app = express();

app.use(express.json());

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', require('./src/routes'));


app.listen(3000);

console.log('API is running on port 3000');