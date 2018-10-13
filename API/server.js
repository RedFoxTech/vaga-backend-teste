const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/pokemongo', {useNewUrlParser: true});

requireDir('./src/models');
require('./src/routes')(app);
app.listen(3000);