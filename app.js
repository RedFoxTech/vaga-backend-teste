require('dotenv').load()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http')
const path = require('path')
const validator = require('express-validator')
const helmet = require('helmet')
const compression = require('compression')

const { Logger } = require('./src/helpers/logger-info')

const { route404, logServer } = require('./src/errors/system')

const  { errorFormatter } = require('./src/errors/validate')

require('./src/databases/mongodb')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(validator(errorFormatter))
app.use(cors())
app.use(compression())
app.use(helmet())
app.disable('x-powered-by')

require('./routes')(app)

const port = process.env.PORT || 3000
const server = http.createServer(app)

app.use((_, res) => res.status(404).json([route404]))

server.listen(port, () => Logger.info(logServer(port)))

module.exports = app
