const {execSync} = require('child_process');
execSync(`${__dirname}/node_modules/.bin/webpack -p --progress --config ${__dirname}/webpack.config.js --context ${__dirname}/`)
execSync(`cp -rf ${__dirname}/dist ${__dirname}/staticDist/`)
execSync(`cp -f ${__dirname}/index.prod.html ${__dirname}/staticDist/index.html`)
