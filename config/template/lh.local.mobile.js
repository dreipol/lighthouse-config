let mobileConfig = require('./lh.local.desktop');

mobileConfig.chromeFlags = ['--window-size=1280,720'];
mobileConfig.disableEmulation = false;
mobileConfig.disableThrottling = false;

module.exports = mobileConfig;
