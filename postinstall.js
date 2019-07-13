const fs = require('fs')

if (!fs.existsSync('public/js')) fs.mkdirSync('public/js')
fs.copyFileSync('node_modules/@kanshi/kanshi/dist/kanshi.js', 'public/js/app.js')
