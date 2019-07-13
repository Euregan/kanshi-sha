require('dotenv').config()

const express = require('express')
const bodyparser = require('body-parser')
const mustache = require('mustache-express')

const config = require('./sideEffects/config')
const log = require('./sideEffects/log')({config})
const cache = require('./sideEffects/cache')({config, log})
const http = require('./sideEffects/http')({log, cache})

const api = require('./api')


Array.prototype.flatMap = function(callback) {
    return this.reduce((acc, el) => acc.concat(callback(el)), [])
}

const configuration = {
    providers: require('./configuration/providers'),
    packages: require('./configuration/packages'),
    standalones: require('./configuration/standalones')
}

const rawProviders = require('fs').readdirSync(require('path').join(__dirname, 'providers'))

let providers = {}
for (let i = 0; i < rawProviders.length; i++) {
    const provider = rawProviders[i]
    providers[provider.split('.')[0]] = require(`./providers/${provider}`)
}

api({
    config: config,
    log: log,
    http: http
}, configuration, providers)(express()
    .engine('mst', mustache())
    .set('view engine', 'mst')
    .set('views', __dirname + '/templates')
    .use(bodyparser.json())
    .use(express.static('public'))
    .use((request, response, next) =>
        log.info(`${(new Date()).toLocaleTimeString()} ${request.protocol}://${request.get('host')}${request.path}`) && next()
    )
)
