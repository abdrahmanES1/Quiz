const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const morgan = require('morgan');
const DataBase = require('../configs/database.config');
const ansis = require('ansis');
const logger = require('./utils/logger')
const PORT = process.env.PORT || 4000;
// Set up logger



function createServer() {
    const app = express();
    app.use(express.json());


    // App security 
    app.use(cors({
        origin: "*"
    }));
    app.use(helmet());

    // Log all requests using logger
    app.use((req, res, next) => {
        logger.info({
            method: req.method,
            url: req.url,
            statusCode: res.statusCode,
            responseTime: Date.now() - req.startTime,
        });
        next();
    });

    // App Logger 
    app.use(morgan('dev'));

    app.listen(PORT, async () => {
        await DataBase.connect();
        console.log(ansis.green("🚀server running in  http://localhost:" + PORT + "/api/"));
    })

    return app
}

module.exports = createServer;
