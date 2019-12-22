'use strict'

const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const { handleError } = require('./app/Exceptions/ApiException')
require('babel-core')

dotenv.config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/api', require('./routes'))

app.use((err, req, res, next) => {
  handleError(err, res)
})

var server = app.listen(process.env.APP_PORT || 3333, function () {
  var host = server.address().address
  var port = server.address().port
  console.info(`server start successfully on http://${host}:${port}`)
})
