'use strict'

class ApiException extends Error {
  constructor (status, message) {
    super()
    this.status = status
    this.message = message
  }
}

const handleError = (err, res) => {
  const { status, message } = err
  res.status(status || 400).json({
    status,
    message
  })
}

module.exports = {
  ApiException,
  handleError
}
