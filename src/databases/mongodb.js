const mongoose = require('mongoose')

const { Logger } = require('../helpers/logger-info')

const url = process.env.MONGODB_URL

mongoose.connect(url, { useNewUrlParser: true })
    .then(() => {
        Logger.info('Mongodb Connected : )')
        mongoose.connection.on('error', (err) => {
            Logger.info(`mongoose connection: ${err}`)
        })
        mongoose.connection.on('reconnected', () => {
            Logger.info('Reconnected to MongoDB')
        })
    })
    .catch((err) => {
        Logger.info(`rejected promise ${err}`)
        mongoose.disconnect()
    })

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        Logger.info('Mongodb: bye : )')
        process.exit(0)
    })
})
