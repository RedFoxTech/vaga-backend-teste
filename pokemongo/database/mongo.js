'use strict'

const mongoose = require('mongoose')
const { mongo } = require('../config')

mongoose.connect(`mongodb://${mongo.host}:${mongo.port}/${mongo.collection}`, mongo.options)
mongoose.Promise = global.Promise

module.exports = mongoose
