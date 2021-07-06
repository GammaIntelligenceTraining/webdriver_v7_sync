const { Given, When, Then } = require('@cucumber/cucumber');
const loginPageObj = require('../pageobjects/Login.page');
const utilObj = require('./../helper/WaitActions');
const allure = require('wdio-allure-reporter');

Given(/^Open the Login Page$/, () => {
    loginPageObj.open();
    //browser.getTitle().should.equal(title);
});

When(/^Enter (.*) and (.*) and click login button$/, (username, password) => {
    loginPageObj.enterLoginDetails(username, password);
    browser.pause(1000)
    loginPageObj.submit();
    ////browser.saveScreenshot();
});

When(/^Login with custom credentials (.*) and (.*) and click login button$/, (username, password) => {
    loginPageObj.enterLoginDetails(username + global.postfix, password);
    browser.pause(1000)
    loginPageObj.submit();
    ////browser.saveScreenshot();
});

Then(/^user logged in successful and admin name ([^"]*) is visible$/, (username) => {
    loginPageObj.verifyUserLoggedInSuccessfully(username);
});

Then(/^custom user logged in successful and admin name ([^"]*) is visible$/, (username) => {
    loginPageObj.verifyUserLoggedInSuccessfully(username + global.postfix);
});

Then(/^logout the user$/, () => {
    loginPageObj.logout();
    //browser.getTitle().should.equal("Login | 7P");
});

Then(/^Incorrect credential message is visible (.+)$/, (errorMessage) => {
  loginPageObj.verifyIncorrectCredentialMessages(errorMessage);
});

When(/^Empty ([^"]*) input$/, (fieldName) => {
    loginPageObj.enterEmptyCredentials(fieldName);
});

Then(/^Validation message (.+) should be visible for (.+)$/, (errorMessage, fieldName) => {
    loginPageObj.verifyErrorMessage(errorMessage,fieldName);
});