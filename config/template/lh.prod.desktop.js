let config = require('./lh.base')(require('@dreipol/lighthouse-config/config/production/desktop'));

config.url = 'http://example.com';
config.persisters.prefix = 'desktop';

module.exports = config;
