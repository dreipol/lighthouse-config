let config = require('@dreipol/lighthouse-config/config/production/desktop');
const { audit, gatherer } = require('@dreipol/lighthouse-audits/brokenlink');

config.url = 'https://example.com';
config.paths = [
    '/',
];
config.report.passes[0].gatherers.push( 
    require.resolve('@dreipol/lighthouse-audits/brokenlink/gatherer')
 );

config.report.audits.push(
    require.resolve('@dreipol/lighthouse-audits/brokenlink/audit')
);
config.report.categories.dreipol = {
    name: 'Dreipol Audits',
    description: 'Dreipol audits',
    audits: [
        { id: 'brokenlinks', weight: 5 },
    ],
}

module.exports = config;
