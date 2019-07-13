const path = require('path')

const configuration = {
    providers: require('../configuration/providers'),
    packages: require('../configuration/packages'),
    standalones: require('../configuration/standalones')
}

const requiredProviders = configuration.packages.concat(configuration.standalones).reduce((acc, config) => {
    for (const key in config) {
        if (typeof config[key] === 'object' && 'provider' in config[key] && !acc.includes(config[key].provider)) {
            acc.push(config[key].provider)
        }
    }
    return acc
}, [])

const rawProviders = require('fs').readdirSync(path.join(__dirname, '..', 'providers'))

let providers = {}
for (let i = 0; i < rawProviders.length; i++) {
    const provider = rawProviders[i]
    const providerName = provider.split('.')[0]
    if (requiredProviders.includes(providerName)) {
        providers[provider.split('.')[0]] = require(path.join(__dirname, '..', 'providers', provider))
    }
}

module.exports = {
    configuration,
    providers
}
