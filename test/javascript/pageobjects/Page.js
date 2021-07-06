const utilObj = require('./../helper/WaitActions');
const allure = require('wdio-allure-reporter');

module.exports = class Page {
    constructor() {
        this.title = 'My Page';
    }

    get homePageLink() { return $('[alt="SEVEN PRINCIPLES AG - Logo"]'); }
    

    
    /**
     * Method to initialize browser instance and open URL of 7p-mdm browser-client
     * Maximize the window after instantiate
     */
    open() {
        browser.url('');
        browser.pause(3000);
        // browser.windowHandleMaximize();
        // browser.pause(3000);
    }

    /**
     * Method to Login
     */
    adminLogin(){
         //this.usernameInput.waitForVisible('[data-testid="input-username"]', 30000);
         utilObj.waitForElementExists(this.usernameInput);
         //this.usernameInput.setValue('admin');
         //super.usernameInput.setValue('admin');         
         this.usernameInput.setValue(global.username);
         this.passwordInput.setValue(global.password);
         this.loginButton.click();
         browser.pause(2000);
         //browser.setValue('[data-testid="input-password"]', global.password);
         //browser.elementClick('[data-testid="button-login"]');
         utilObj.waitForPageToLoad();
         browser.pause(2000);
        //  browser.pause(3000);
         //browser.waitForExist('[data-testid="link-dashboard"]', 30000);
    }

    
    verifyHomePage() {
        this.homePageLink.waitForExist();
        /*let currentPageTitle = browser.getTitle();
        if (currentPageTitle.includes("Home")) {
            allure.createStep('User is on homepage');
        }
        else {
            //this.homePageLink.waitForVisible();
            //this.homePageLink.scroll();
            this.homePageLink.click();
        }*/
    }


}
