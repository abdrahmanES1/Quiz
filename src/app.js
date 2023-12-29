const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const morgan = require('morgan');
const DataBase = require('../configs/database.config');
const ansis = require('ansis');

const PORT = process.env.PORT || 4000;

function createServer() {
    const app = express();
    app.use(express.json());


    // App security 
    app.use(cors({
        origin: "*"
    }));
    app.use(helmet());


    // App Logger 
    app.use(morgan('dev'));

    app.listen(PORT, async () => {
        await DataBase.connect();
        console.log(ansis.green("🚀server running in  http://localhost:" + PORT + "/api/"));
    })

    return app
}

module.exports = createServer;
