let config = require('@dreipol/lighthouse-config/config/production/desktop');
const { audit, gatherer } = require('@dreipol/lighthouse-audits/brokenlink');

config.url = 'https://example.com';
config.paths = [
    '/',
];
config.report.passes[0].gatherers.push(gatherer);
config.report.audits.push(audit);
config.report.categories.dreipol = {
    name: 'Dreipol Audits',
    description: 'Dreipol audits',
    audits: [
        { id: 'brokenlinks', weight: 5 },
    ],
}

module.exports = config;
