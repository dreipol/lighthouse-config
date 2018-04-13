
module.exports = function (config) {

    // configure path to be reported
    config.paths = [
        '/',
    ];

    // define a budget for the project
    config.budget = {
        performance: 90,
        pwa: 70,
        accessibility: 70,
        'best-practices': 70,
        dreipol: 95,
        seo: 95,
    };

    // add custom data gatherers
    config.report.passes[0].gatherers.push(
        require.resolve('@dreipol/lighthouse-audits/brokenlink/gatherer'),
        require.resolve('@dreipol/lighthouse-audits/plain-email/gatherer')
    );

    // add custom audits
    config.report.audits.push(
        require.resolve('@dreipol/lighthouse-audits/brokenlink/audit'),
        require.resolve('@dreipol/lighthouse-audits/plain-email/audit')
    );

    // create custom category
    config.report.categories.dreipol = {
        name: 'Dreipol Audits',
        description: 'Dreipol audits',
        audits: [
            { id: 'brokenlink-audit', weight: 5 },
            { id: 'plain-email-audit', weight: 0 },
        ],
    };

    return config;
};
