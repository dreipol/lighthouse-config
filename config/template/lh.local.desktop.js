let config = require('./lh.base')(require('@dreipol/lighthouse-config/config/local/desktop'));

config.url = 'http://localhost:8000';

module.exports = config;
