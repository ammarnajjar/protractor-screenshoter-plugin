var env = require('../environment');

exports.config = {
    seleniumAddress: env.seleniumAddress,
    framework: 'jasmine2',
    specs: ['../protractor/angularjs-homepage-disabled-test.js'],
    plugins: [{
        path: '../../../index.js',
        screenshotPath: '.tmp/say',
        screenshotOnExpect: 'failure',
        screenshotOnSpec: 'failure',
        speak: true
    }]
};