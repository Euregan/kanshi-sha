const server = require('./index.js')

server({
    configuration: 'src/configuration',
    providers: 'src/providers',
    resources: 'public'
})
