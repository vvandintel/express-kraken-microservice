const axios = require('axios')

const getAssetInfo = async (req, res) => {
    const requestUrl = 'https://api.kraken.com/0/public/Assets'

    try {
        const data = (await axios.get(requestUrl)).data
        
        console.log(data)
        res.send(data)
    } catch (err) {
        console.log({error: err})
        res.status(500).send({ message: 'Error fetching asset data' })
    }
}

const getTicker = async (req, res) => {
    const pair = req.query.pair
    const requestUrl = `https://api.kraken.com/0/public/Ticker?pair=${pair}`

    try {
        const responseData = (await axios.get(requestUrl)).data.result.XXBTZUSD

        console.log(responseData)
        
        const result = {
            ask: {
                price: responseData.a[0],
                wholeLotVolume: [responseData.a][1],
                lotVolume: responseData.a[2],
            },
            bid: {
                price: responseData.b[0],
                wholeLotVolume: responseData.b[1],
                lotVolume: responseData.b[2],
            },
            lastTradeClosed: {
                price: responseData.c[0],
                lotVolume: responseData.c[1],
            },
            volume: {
                today: responseData.v[0],
                last24hours: responseData.v[1],
            },
            volumeWeightedAveragePrice: {
                today: responseData.p[0],
                last24hours: responseData.p[1],
            },
            numberOfTrades: {
                today: responseData.t[0],
                last24hours: responseData.t[1],
            },
            lowPrice: {
                today: responseData.l[0],
                last24hours: responseData.l[1],
            },
            highPrice: {
                today: responseData.h[0],
                last24hours: responseData.h[1],
            }
        }

        const formattedResponse = {
            error: [],
            XXBTZUSD: result
        }
        
        console.log(formattedResponse)
        res.send(formattedResponse)
    } catch (err) {
        console.log({error: err})
        res.status(500).send({ message: 'Error fetching ticker data' })
    }
}

module.exports = {
    getAssetInfo,
    getTicker
}