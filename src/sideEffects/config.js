module.exports = {
    nexus: {
        auth: process.env.NEXUS_AUTH,
        host: 'registry.bourso.net'
    },
    bamboo: {
        auth: process.env.BAMBOO_AUTH,
        host: 'bamboo.boursorama.com',
        cache: process.env.BAMBOO_CACHE
    },
    bitbucket: {
        auth: process.env.BITBUCKET_AUTH,
        host: 'stash.boursorama.com',
        cache: process.env.BITBUCKET_CACHE
    },
    elasticsearch: {
        auth: process.env.ELASTICSEARCH_AUTH,
        host: 'logs.bourso.net/elasticsearch'
    },
    app: {
        logLevel: process.env.LOG_LEVEL,
        environment: process.env.NODE_ENV,
        maximum: {
            packages: 20,
            deployments: 20
        },
        standalones: [
            {
                id: 'api',
                name: 'B19',
                bitbucket: { project: 'FR', repository: 'boursorama.com' },
                bamboo: { project: 'BOUR', plan: 'B197210' },
                nexus: null
            },
            {
                id: 'b20',
                name: 'B20',
                bitbucket: { project: 'FR', repository: 'web-fr-front-20' },
                bamboo: { project: 'WEB', plan: 'B2072' },
                nexus: null
            },
            {
                id: 'portal',
                name: 'Portail',
                bitbucket: { project: 'FR', repository: 'web-fr-portal-20' },
                bamboo: { project: 'P20', plan: 'P20PHP72' },
                nexus: null
            },
            {
                id: 'subscription',
                name: 'Souscription',
                bitbucket: { project: 'FR', repository: 'web-fr-subscription-01' },
                bamboo: { project: 'WEBSUBSCR', plan: 'S01PHP72' },
                nexus: null
            },
            {
                id: 'vitrine',
                name: 'Vitrine',
                bitbucket: { project: 'FR', repository: 'web-fr-vitrine-20' },
                bamboo: { project: 'WEBVITR', plan: 'VIT72' },
                nexus: null
            },
        ],
        packages: [
            {
                id: 'vue-machine',
                name: 'Vue Machine',
                bitbucket: null,
                nexus: { repository: 'npm-front1', name: 'vue-machine' },
                bamboo: { project: 'FWK', plan: 'VUEXSTATE' }
            },
            {
                id: 'mortgage-simulator',
                name: 'Mortgage Simulator',
                bitbucket: null,
                nexus: { repository: 'npm-front1', name: 'mortgage-simulator' },
                bamboo: { project: 'OF', plan: 'WEB' }
            },
            {
                id: 'vue-ui-bundle',
                name: 'Vue UI Bundle',
                bitbucket: null,
                nexus: { repository: 'npm-front1', name: 'ui-bundle' },
                bamboo: { project: 'FWK', plan: 'UIBNDL' }
            },
            {
                id: 'php-ui-bundle',
                name: 'PHP UI Bundle',
                bitbucket: { project: 'FWK', repository: 'php-brs-ui-bundle' },
                nexus: null,
                bamboo: null
            },
            {
                id: 'streaming-bundle',
                name: 'Streaming Bundle',
                bitbucket: { project: 'FWK', repository: 'php-brs-streaming-bundle' },
                nexus: null,
                bamboo: null
            },
            {
                id: 'orderframe',
                name: 'Orderframe',
                bitbucket: null,
                bamboo: { project: 'OF', plan: 'OFFR' },
                nexus: { repository: 'npm-front1', name: 'brs-orderframe' }
            },
            {
                id: 'php-api-client-bundle',
                name: 'PHP API client Bundle',
                bitbucket: { project: 'FWK', repository: 'php-brs-api-client-bundle' },
                bamboo: null,
                // bamboo: { project: 'PFP', plan: 'BACB10' },
                nexus: null
            },
            {
                id: 'web-fr-aggregator-01',
                name: 'Aggregator',
                bitbucket: null,
                bamboo: { project: 'AGREG', plan: 'FRAG01' },
                nexus: { repository: 'npm-front1', name: 'brs-pfm-aggregator' }
            }
        ]
    }
}
