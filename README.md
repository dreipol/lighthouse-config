# @dreipol/lighthouse-config
Centralized location to hold the `@dreipol/lighthouse-runner` default configuration

# Install

    npm i @dreipol/lighthouse-config

# Setup
This module simply provides some default configuration. You can extend this config to your flavour.
Therefore no setup for this module is required.

## Config

### Structure

| field              | type          | default                                                        | value                                                                                                                           |
| ------------------ | ------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| paths              | Array<string> | `['/']`                                                        | Array of url paths. All these routes are tested and reported                                                                    |
| chromeFlags        | Array<string> | `['--window-size=1200,800']`                                   | Array of additional chrome flags. [See all](https://peter.sh/experiments/chromium-command-line-switches/)                       |
| folder             | string        | `./dreihouse-reports`                                         | Define location to store the reports                                                                                            |
| disableEmulation   | boolean       | `true`                                                         | Applay device emulation                                                                                                         |
| disableThrottling  | boolean       | `true`                                                         | Disable Network and CPU throttling                                                                                              |
| saveReport         | boolean       | `true`                                                         | Save report as json file for further inspections                                                                                |
| reporters.modules | Array<string, ResultReporterInterface> | `['html']`                             | Current available persisters are `html` `json` and `html-dashboard|
| report             | Object        |                                                                | Lighthouse report configurations. [See exmaples](https://github.com/GoogleChrome/lighthouse/tree/master/lighthouse-core/config) |

### Example
    
    paths: [
        '/',
    ],
    folder: "./dreihouse-reports",
    tag: 'desktop',
    chromeFlags: ['--window-size=1280,1024'],
    disableEmulation: true,
    disableThrottling: true,
    saveReport: true,
    budget: {
        dreipol: 100,
        seo: 90,
        performance: 90,
        pwa: 70,
        accessibility: 70,
        'best-practices': 70,
    },
    reporters: {
        modules: [
            'html',
            {
                // my custom result reporter
                key: 'FancyReporter',
                handle: (results) => {
                    console.log(results);
                }
            }
        ]
    },
    report: {...}


### Extend from the base config
You can extend the base configuration with your own configuration. This is done by creating a new config file in your project and include the base config via require. Then you can edit the Object the way you want

Example for local mobile config:

    let mobileConfig = require('@dreipol/lighthouse-config/config/local/desktop');

    mobileConfig.chromeFlags = ['--window-size=320,480'];
    mobileConfig.disableEmulation = false;
    mobileConfig.disableThrottling = false;

    module.exports = mobileConfig;

