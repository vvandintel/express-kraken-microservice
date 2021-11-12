require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const expressWinston = require('express-winston')
const winston = require('winston')
const app = express()
const routes = require('./routes')

app.use(helmet())
app.use(express.json())
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
})) 

app.get('/', routes.helloRoute)
app.get('/asset-info', routes.getAssetInfo)
app.get('/tickers/:assetPair', routes.getTicker)
app.get('/getClassInfo', routes.wwApiExample1)

// Run the server!
const start = async () => {
    try {
        await app.listen(process.env.PORT || 5000, process.env.host || '0.0.0.0')
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

start()