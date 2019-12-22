'use strict'

module.exports = {
  host: process.env.MONGO_HOST,
  port: process.env.MONGO_HOST,
  user: process.env.MONGO_HOST,
  password: process.env.MONGO_HOST,
  collection: process.env.MONGO_COLLECTION,
  options: {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
}
