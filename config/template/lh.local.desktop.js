let config = require('@dreipol/lighthouse-config/config/local/desktop');

config.url = 'http://localhost:8000';
config.paths = [
    '/',
];

module.exports = config;
