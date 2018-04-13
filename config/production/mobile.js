let mobileConfig = require('./desktop');

mobileConfig.chromeFlags = ['--window-size=320,480'];
mobileConfig.disableEmulation = false;
mobileConfig.disableThrottling = false;
mobileConfig.tag = 'mobile';

module.exports = mobileConfig;
