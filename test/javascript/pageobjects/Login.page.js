const Page = require('./Page');
const allure = require('wdio-allure-reporter');
const utilObj = require('./../helper/WaitActions');
const { util } = require('protobufjs');
//const { save } = require('babel-register/lib/cache');

class LoginPage extends Page {

    get usernameInput() { return $('[data-testid="input-username"]'); }
    get passwordInput() { return $('[data-testid="input-password"]'); }
    get loginBtn() { return $('[data-testid="button-login"]'); }
    get UserID() { return $('[class="admin-wrapper"]'); }
    get logoutIcon() { return $('[class="logout"]'); }
    get mdmHeader() { return $('h1=7P Mobile Device Management'); }
    get loaderDiv() { return $('[id="loading-view"]'); }
    get alertMessage() { return $('[data-testid="form-login-error"]'); }
    get usernameErrorMsg() { return $('[data-testid="error-username"]'); }
    get passwordErrorMsg() { return $('[data-testid="error-password"]'); }
    get languageDropdownBox() { return $('[data-testid="select-language"]') }
    get errorMessage() { return $('[class="form-group form-input-error"]/small'); }

    /**
     * Method to open the instance URL in browser window
     */
    open() {
        super.open();
        utilObj.waitForElementExists(this.usernameInput);
        super.languageDropdownBox.waitForExist(30000);
        utilObj.waitForDefaultTimeOut();
    }

    /**
     * Method to click login button
     */
    submit() {
        this.loginBtn.click();
        //allure.createStep('clicked on login button');
    }

    /**
     * Method to Enter username and password in login page
     * @param {*} username
     * @param {*} password
     */
    enterLoginDetails(username, password) {
        this.usernameInput.setValue(username);
        this.passwordInput.setValue(password);
    }

    /**
     * Method to verify user logged in successfully
     * @param {*} userName
     */
    verifyUserLoggedInSuccessfully(userName) {
        utilObj.waitForDefaultTimeOut();
        utilObj.waitForElementExists(this.UserID);
        /*if (this.UserID.isDisplayed()) {
            //expect(this.UserID.getText(), "Something went wrong, user login failed").to.contain(userName);
        }
        else {
            browser.keys("\uE03C");
            //browser.saveScreenshot();
            //expect(this.UserID.isDisplayed(), "Something went wrong, user login failed").to.be.true;
        }*/
    }

    /**
     * Method to logout for the admin
     */
    logout() {
        utilObj.waitForElementExists(this.logoutIcon)        
        this.logoutIcon.click();
        browser.pause(3000);
        ////browser.saveScreenshot();
        utilObj.waitForElementExists(this.mdmHeader)
    }

    /**
     * Method to verify error message after entering Empty login credentialss
     */
    verifyErrorMessage(errorMessage, fieldName) {
        if (fieldName == "Username") {
            utilObj.waitForElementExists(this.usernameErrorMsg);            
        }
        else if (fieldName == "Password") {
            utilObj.waitForElementExists(this.passwordErrorMsg);            
        }
    }

    /**
     * Method to verify error message after entering incorrect login credentialss
     * @param {*} errorMessage
     */
    verifyIncorrectCredentialMessages(errorMessage) {
        //browser.pause(2000);
        utilObj.waitForDefaultTimeOut();
        ////browser.saveScreenshot();
        utilObj.waitForElementExists(this.alertMessage);        
    }

    /**
     * Method to enter empty values in username and password
     * @param {*} fieldName
     */
    enterEmptyCredentials(fieldName) {
        if (fieldName == 'Username') {
            this.usernameInput.setValue(" ");
            browser.pause(3000);
        }
        else if (fieldName == 'Password') {
            this.usernameInput.setValue("username");
            this.passwordInput.setValue(" ");
            browser.pause(3000);
        }
        //allure.addDescription("entered empty input in the" + fieldName);
    }

}

module.exports = new LoginPage();
