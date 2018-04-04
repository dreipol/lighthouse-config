# @dreipol/lighthouse-config

Basic configuration files for the lighthouse reporting

## Usage

    const config = require('@dreipol/lighthouse-config/config/<ENV>/<DEVICE>');

- ENV can either be `local` or `production`
- DEVICE can either be `desktop` or `mobile`

## Extend from the base config
You can extend the base configuration with your own configuration. This is done by creating a new config file in your project and include the base config via require. Then you can edit the Object the way you want

Example for local mobile config:

    let mobileConfig = require('@dreipol/lighthouse-config/config/local/desktop');

    mobileConfig.chromeFlags = ['--window-size=320,480'];
    mobileConfig.disableEmulation = false;
    mobileConfig.disableThrottling = false;

    module.exports = mobileConfig;



## Structure

| field              | type          | default                                                        | value                                                                                                                           |
| ------------------ | ------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| url                | string        | local:`http://localhsot:8000` production:`https://example.com` | where all the reports are run                                                                                                   |
| paths              | Array<string> | [`/`]                                                          | Array of url paths. All these routes are tested and reported                                                                    |
| chromeFlags        | Array<string> | ['--window-size=1200,800']                                     | Array of additional chrome flags. [See all](https://peter.sh/experiments/chromium-command-line-switches/)                       |
| folder             | string        | `../reports`                                                   | Define location to store the reports                                                                                            |
| disableEmulation   | boolean       | `true`                                                         | Applay device emulation                                                                                                         |
| disableThrottling  | boolean       | `true`                                                         | Disable Network and CPU throttling                                                                                              |
| saveReport         | boolean       | `true`                                                         | Save report as json file for further inspections                                                                                |
| report             | Object        |                                                                | Lighthouse report configurations. [See exmaples](https://github.com/GoogleChrome/lighthouse/tree/master/lighthouse-core/config) |
| persisters.modules | Array         | ['json', 'html']                                               | Current available persisters are json and html                                                                                  |