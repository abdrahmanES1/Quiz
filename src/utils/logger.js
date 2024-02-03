const winston = require("winston");
const { transports } = winston;
const { combine, timestamp, json } = winston.format

const logger = winston.createLogger({
    level: 'combined',
    format: combine(timestamp({
        format: 'YYYY-MM-DD hh:mm:ss.SSS A',
    }), json()),
    transports: [
        new winston.transports.File({ filename: 'logs/error.log', level: 'error', format: winston.format.json(), }),
        new winston.transports.File({ filename: 'logs/combined.log', level: 'info', format: winston.format.json(), })
    ],
});

module.exports = logger

