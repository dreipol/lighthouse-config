let mobileConfig = require('./lh.prod.desktop');

mobileConfig.chromeFlags = ['--window-size=1280,720'];
mobileConfig.disableEmulation = false;
mobileConfig.disableThrottling = false;

mobileConfig.persisters.prefix = 'mobile';

module.exports = mobileConfig;
