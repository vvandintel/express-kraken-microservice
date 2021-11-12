const krakenRoutes = require('./kraken')
const wwApiRoutes = require('./wwapi')

const helloRoute = async (req, res) => {
    res.send({ hello: 'world' })
}

module.exports = {
    helloRoute,
    ...krakenRoutes,
    ...wwApiRoutes
}