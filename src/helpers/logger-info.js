
const { createLogger, format, transports } = require('winston')
const { combine } = format

module.exports.Logger = createLogger({
    level: 'info',
    format: combine(
        format.colorize(),
        format.splat(),
        format.simple()
    ),
    transports: [
        new transports.Console()
    ]
})
