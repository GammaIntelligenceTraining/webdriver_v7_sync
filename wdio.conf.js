const path = require('path')
const fs = require('fs')
const rmdir = require('./test/javascript/helper/rmdir')
const del = require('del');

global.downloadDir = path.join(__dirname, 'tempDownload');
global.dataDir = path.join(__dirname, './test/resources/testdata');
global.username = 'admin';
global.password = 'N3p1fwux';
var dt = new Date()
global.postfix = dt.getMonth() + '-' + dt.getDate() + '_' + dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds();
global.tenant = '1_automation';

envPropertiesFilePath='./test/resources/testdata/environment.xml';
AllureResultPath= './allure-results/environment.xml';
BuildResultPath='./build/build.info';

exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).
    runner: 'local',
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [

        //'./test/resources/features/**/*.feature',  
        //'./test/resources/features/Admin/*.feature',   
        //'./test/resources/features/CatalogPage.feature', 
        //'./test/resources/features/AddToCart.feature',
        //'./test/resources/features/EmailValidation.feature',
        //'./test/resources/features/EmailAlreadyUsedOnCheckout.feature',
        './test/resources/features/CompanyContact.feature',
        './test/resources/features/LatestNews.feature',
        //'./test/resources/features/Login.feature',
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
        /*Important!!! always exclude this part*/
                
         
        /*End of excluded test cases*/
        /*Tests under development*/
        
        /*-----------------------------------*/
        /**------Flaky tests part (excluded for stable suite)----*/              

         
        /*-----End of flaky tests---------------------------------*/                     

         
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    //maxInstances: 0,
    maxInstances: 10,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
    
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 4,
        //
        //browserName: 'chrome',
        browserName: 'chrome',
        'goog:chromeOptions': {

            //Please use this part if you want to execute tests in headless mode
            //args: ['--headless', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--window-size=1200,1100', '--disable-translate', '--disable-extensions', '--disable-background-networking', '--disable-sync', '--disable-default-apps', '--mute-audio', '--no-first-run', '--disable-prompt-on-repost'],
            //Please use this part if you want to execute tests in headless mode
            args: ['--window-size=1920,1080',  '--disable-extensions', '--disable-translate','--disable-background-networking', '--disable-sync', '--disable-default-apps', '--mute-audio', '--no-first-run', '--disable-prompt-on-repost'],
            prefs: {'download.default_directory': downloadDir,'safebrowsing.enabled': 'False'},
              
        },    
        //}],

        //acceptInsecureCerts: true
        // If outputDir is provided WebdriverIO can capture driver session logs
        // it is possible to configure which logTypes to include/exclude.
        // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
        // excludeDriverLogs: ['bugreport', 'server'],
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/sync, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/applitools-service': 'info'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
	baseUrl: 'https://infodekoor-uat.gammatest.net/',
    //baseUrl: 'http://mdm.7p-group.com/mdm5qatest/',    
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 30000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 2,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: ['chromedriver'],
    
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'cucumber',
    //
    // The number of times to retry the entire specfile when it fails as a whole
    specFileRetries: 0,
    //
    // Delay in seconds between the spec file retry attempts
    specFileRetriesDelay: 10,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: ['allure','spec'],//
    reporterOptions: {
    allure: {
      outputDir: './allure-results',
      disableWebdriverStepsReporting: true,
      useCucumberStepReporter: true
    },
  },


    //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./test/javascript/step-definition/**/*.spec.js'],        
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: ['@babel/register'],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        format: ['pretty'],
        // <boolean> hide step definition snippets for pending steps
        snippets: false,
        // <boolean> hide source uris
        source: true,
        // <string[]> (name) specify the profile to use
        profile: [],
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },
    
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
     onPrepare: function (config, capabilities) {
        // make sure download directory exists
        if (!fs.existsSync(downloadDir)) {
          // if it doesn't exist, create it
          fs.mkdirSync(downloadDir);
        }
        
        //delete the results folder before each run to cleanup the data
        del(['allure-report', 'allure-results']);
        //del(['allure-report']);
    },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    beforeSession: function (config, capabilities, specs) {
        require("babel-register");
    },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    before: function (capabilities, specs) {
        const chai = require('chai');
    
        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    
      },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Runs before a Cucumber feature
     */
    // beforeFeature: function (uri, feature) {
    // },
    /**
     * Runs before a Cucumber scenario
     */
    // beforeScenario: function (world) {
    // },
    /**
     * Runs before a Cucumber step
     */
    // beforeStep: function (step, context) {
    // },
    /**
     * Runs after a Cucumber step
     */
    afterStep: function (step, context, { error, result, duration, passed, retries }) {
        if (error) {
            browser.takeScreenshot();
          }
    },
    /**
     * Runs after a Cucumber scenario
     */
    // afterScenario: function (world) {
    // },
    /**
     * Runs after a Cucumber feature
     */
    // afterFeature: function (uri, feature) {
    // },
    
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    /*onComplete: function () {
        //to remove the temporary report download directory
        //rmdir(downloadDir);
        fs.copyFileSync(envPropertiesFilePath, AllureResultPath);
    },*/
    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
