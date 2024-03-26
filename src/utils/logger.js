const winston = require("winston");
const { transports } = winston;
const { combine, timestamp, json } = winston.format
const path = require("path")
const logger = winston.createLogger({
    level: 'combined',
    format: combine(timestamp({
        format: 'YYYY-MM-DD hh:mm:ss.SSS A',
    }), json()),
    transports: [
        new winston.transports.File({ filename:path.join(process.cwd(),'logs/error.log'), level: 'error', format: winston.format.json(), }),
        new winston.transports.File({ filename: path.join(process.cwd(),'logs/info.log'), level: 'info', format: winston.format.json(), })
    ],
});

module.exports = logger

