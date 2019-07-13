module.exports = {
    app: {
        logLevel: process.env.LOG_LEVEL,
        environment: process.env.NODE_ENV,
        maximum: {
            packages: 20,
            deployments: 20
        }
    }
}
