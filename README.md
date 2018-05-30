# @dreipol/lighthouse-config
Centralized location to hold the `@dreipol/lighthouse-runner` default configuration

# Install

    npm i @dreipol/lighthouse-config

# Setup
This module simply provides some default configuration. You can extend this config to your flavour.
Therefore no setup for this module is required.

## Config


| field              | type          | default                                                        | value                                                                                                                           |
| ------------------ | ------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| paths              | Array<string> | `['/']`                                                        | Array of url paths. All these routes are tested and reported                                                                    |
| chromeFlags        | Array<string> | `['--window-size=1200,800']`                                   | Array of additional chrome flags. [See all](https://peter.sh/experiments/chromium-command-line-switches/)                       |
| folder             | string        | `./dreihouse-reports`                                         | Define location to store the reports                                                                                            |
| disableEmulation   | boolean       | `true`                                                         | Applay device emulation                                                                                                         |
| disableThrottling  | boolean       | `true`                                                         | Disable Network and CPU throttling                                                                                              |
| preAuditScripts| Array<PreAuditScriptInterface> | `['html']`                             | Current available persisters are `html` `json` and `html-dashboard|
| report             | Object        |                                                                | Lighthouse report configurations. [See exmaples](https://github.com/GoogleChrome/lighthouse/tree/master/lighthouse-core/config) |

### preAuditScripts
In order to handle login forms, or do other modifications of the page before lighthouse audits the page,
you can add some `preAuditScripts` in the config. Those scripts are executed right before lighthouse starts.
These scripts have to implement the [`PreAuditScriptInterface`](src/PreAuditScriptInterface.ts) interface.

The will be already on your desired route

Here is an example of such login script
    
    module.exports = {
        execute:async(logger, page) {
            await page.waitForSelector('#username', { visible: true });
            await page.waitForSelector('#password', { visible: true });
            
            const usernameInput = await page.$('#username');
            const passwordInput = await page.$('#password');
            
            await usernameInput.type(process.env.LOGIN_USERNAME);
            await passwordInput.type(process.env.LOGIN_PASSWORD);
            
            await passwordInput.press('Enter');
        }
    }
    
    
Now in your `config` file you can load the login script


    ...
    saveReport: true,
    budget: {
        ...
    },
    preAuditScripts: [
        require('your/login/script.js'),
    ],
    reporters: {
        modules: [
            ...
            
            
### Example
    
    paths: [
        '/',
    ],
    folder: "./dreihouse-reports",
    tag: 'desktop',
    chromeFlags: ['--window-size=1280,1024'],
    disableEmulation: true,
    disableThrottling: true,
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

    let mobileConfig = require('@dreipol/lighthouse-config/config/base/desktop');

    mobileConfig.chromeFlags = ['--window-size=320,480'];
    mobileConfig.disableEmulation = false;
    mobileConfig.disableThrottling = false;

    module.exports = mobileConfig;

