var SpecReporter = require("jasmine-spec-reporter");

exports.config = {

    exclude: [],

    framework: 'jasmine',

    jasmineNodeOpts: {
        showTiming: true,
        showColors: true,
        isVerbose: false,
        includeStackTrace: false
    },

    onPrepare: () => {
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: true
        }));

        browser.ignoreSynchronization = false;
    },

    capabilities: {
        browserName: "chrome"
    },
    directConnect: true,

    useAllAngular2AppRoots: true
}