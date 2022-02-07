## About

Currently this framework has been developed to run scripts on Chrome Browser and windows Platform
To run the suite on different browser and platform changes in "wdio.conf.js" file will be required.

### Tech Stack

* [Selenium Service] - This is a node based CLI library for launching Selenium with WebDrivers support.
* [WebdriverIO](https://webdriver.io/) - It is the selenium webdriver api bindings for node.js, It has a very simple api which could be used to automate web & browser apps in a fast and scalable way. 
* [Javascript](https://developer.mozilla.org/bm/docs/Web/JavaScript) - JavaScript (JS) is a lightweight, interpreted or JIT compiled programming language with first-class functions. Most well-known as the scripting language for Web pages, many non-browser environments also use it, such as node.js and Apache CouchDB.
* [Cucumber](https://cucumber.io/) - The popular BDD test framework which helps us write automated tests.
* [Allure] (http://allure.qatools.ru/) - The Allure Reporter creates Allure test reports which is an HTML generated website with all necessary information to debug your test results and take a look on error screenshots.

### Getting Started

### Pre-requisites

1. NodeJS and npm installed globally in the system. (For webdriver v7 node 12.x should be used). NB! Please note that current solution is not working with node 16.x and 17.x. You need to downgrade the node version using nvm
https://nodejs.org/en/download/

2.  JAVA(JDK) installed in the system (Java 8).

3. Set **JAVA_HOME** paths correctly in the system.

4. Chrome browser installed.

5. Text Editor/IDE (Optional) installed-->Sublime/Visual Studio Code/Brackets. [VS code used while developing the scripts]

6. Allure on system to generate and open HTML allure reports from allure-results.

```
Windows/macOS: follow link https://docs.qameta.io/allure/
Linux:  https://launchpad.net/~qameta/+archive/ubuntu/allure/+files/allure_2.4.1~xenial_all.deb
Or
dpkg -i allure_2.4.1~xenial_all.deb
sudo apt-get install -f
```

## Installation

### Setup Scripts

* Clone the repository into a folder
* Go inside the folder and run following command from terminal/command prompt
```
npm install
```
* All the dependencies from package.json would be installed in node_modules folder.

### Run Tests

```
npm test
```

* Next step if you wish to generate Allure html report then execute below command -

```
npm run generate-report
```

## Writing Tests

Cucumber framework has been integrated with thi project, WebdriverIO's `wdio-cucumber-framework` adapter helps write BDD style tests with Features & Step Definitions.

```
const {Given, When, Then} = require('cucumber');
const {expect} = require('chai);
const loginPageObj require('../pageobjects/login.page');

Given(/^Open the Login Page and verify title is (.*)$/, (title) => {
    loginPageObj.open();
    browser.getTitle().should.equal(title);
});

```
## Page Objects

This framework is written using page-object design pattern.

```
class LoginPage extends Page {
    get usernameInput() { return $('//*[@id="username-input"]'); }
    get passwordInput() { return $('//*[@id="password-input"]'); }
    open() {
        super.open();
        utilObj.waitForElementExists(this.usernameInput);
        browser.elementClick('//*[@data-testid="input-search-select-language"]')
        browser.elementClick('div=English')
    }
}
```

## Finding-Elements

Finding elements in browser's could be tricky sometimes.

* Best way to find elements in web browser is by ***debugging with Chrome DevTools***.

## Reports

Currently this project has been integrated with [Allure-Reports](http://allure.qatools.ru/). WebdriverIO's `wdio-allure-reporter` helps us generate detailed reports of our tests.
Once the test execution is finished you would find the **allure-results** folder generated automatically. Then you would have to run the following command to generate **HTML Report**

```
npm run generate-report
```
## Test Execution on Linux Platform

To execute the suite on linux you have to do below changes in configuration file:

un-comment the below code in wdio.conf.js file

```
 services: ['selenium-standalone'],
  // capabilities: [{
  //   maxInstances: 2,
  //   browserName: 'chrome',
  // chromeOptions: {
  //   args: [ '--disable-gpu', '--no-sandbox', '--window-size=1920,1080'],
  // binary: '/usr/bin/google-chrome'
  // },
  // }],
```

Also change the browser metadata information

```
 browserName: 'chrome',
    metadata: {
      browser: {
        name: 'Chrome',
        version: '89.0.3440.106'
      },
      platform: {
        name: 'Windows',  //change this to 'Linux'
        version: '10' //change to Platform version
      }
    },
```


