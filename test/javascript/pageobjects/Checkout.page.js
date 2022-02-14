const Page = require('./Page');
const allure = require('wdio-allure-reporter');
const utilObj = require( '../helper/WaitActions')


class CheckoutPage extends Page {

    //get CatalogLink() { return $('#hp > div.main > div.header.box > div.slogan > ul > li:nth-child(3) > a""]'); }
    get cart() { return $('#cart')};
    get emailField() { return $('#login > input[type=text]:nth-child(5)')};
    get passwordField() { return $('#login > input[type=password]:nth-child(10)')};
    get loginButton() { return $('#button-login')};
    
    /*
    Method to login
    */
    loginAsRegisteredUser() {
        utilObj.waitForDefaultTimeOut();
        this.emailField.click();
        this.emailField.clearValue();
        this.emailField.setValue('Daniel');
        this.passwordField.click();
        this.passwordField.clearValue();
        this.passwordField.setValue('Daniel123');
        this.loginButton.click();
        browser.pause(3000);
    }
    /**
     * Method to verify visible menu links
     */
    verifyVisibleMenuList(allowedMenuItemList, dataTable) {
        browser.pause(3000);
        if (allowedMenuItemList == "Organization") {
            //expect(super.organizationMenuLink.isDisplayed(), "Organization menu is not visible").to.be.true;
            super.organizationMenuLink.click();
            utilObj.waitForDefaultTimeOut();
            var List = dataTable.raw();
            //console.log(List)
            List.forEach(element => {
                element.forEach(item => {
                    if (item == "Users and devices") {
                        //browser.saveScreenshot();
                        //expect(super.userDeviceMenuLink.isDisplayed(), "Users and devices menu is not visible").to.be.true;
                        //allure.createStep("Admin has access of user and device page")
                    }
                    else if (item == "Hierarchies and groups") {
                        //browser.saveScreenshot();
                        //expect(super.hieGroupMenuLink.isDisplayed(), "Hierarchies and groups menu is not visible").to.be.true;
                        //allure.createStep("Admin has access of user and device page")
                    }
                    else if (item == "User assignment") {
                        //browser.saveScreenshot();
                        //expect(super.userAssignmentLink.isDisplayed(), "User assignment menu is not visible").to.be.true;
                        //allure.createStep("Admin has access of user and device page")
                    }
                    else if (item == "Device pool") {
                        //browser.saveScreenshot();
                        //expect(super.devicePoolLink.isDisplayed(), "Device pool menu is not visible").to.be.true;
                        //allure.createStep("Admin has access of user and device page")
                    } else {
                        //browser.saveScreenshot();
                        throw "Invalid menu item"
                    }
                });
            });
        }
        // else if (allowedMenuItemList == "Dashboard") {

        // }
    }

    /**
     * Method to verofy if current page is dashboard else navigate to dashboard
     */
    verifyCurrentPage() {
        let currentPage = browser.getTitle();
        if (currentPage.includes("Dashboard")) {
            allure.createStep('User is on Dashboard');
        }
        else {
           // super.dashboardLink.scroll();
            super.dashboardLink.click();
            //allure.addDescription("open the server instance");
        }
    }

    /**
     * Method to navigate to home page
     */
    navigateToHomepage() {
        utilObj.waitForDefaultTimeOut()
        if (super.homePageLink.isDisplayed()) {
            super.homePageLink.click()
            utilObj.waitForPageToLoad()
        }
        else {
            utilObj.waitForDefaultTimeOut()
            super.reportsLink.waitForExist(utilObj.defaultwait)
            super.reportsLink.click()
            utilObj.waitForDefaultTimeOut()
            super.homePageLink.waitForExist(utilObj.defaultwait)
            super.homePageLink.click()
            browser.pause(5000);
        }
    }

    /**
     * Verify admin can changes its password
     */
    verifyAdminCanChangeCredentials(){
        utilObj.waitForDefaultTimeOut();
        super.adminNameClass.click();
        super.adminDivModel.waitForExist(30000);
    }

    verifyCatalogPage() {
                
        if (this.cart.isDisplayed()) {
            allure.createStep('User is on catalog');
        }
        else {
           // super.dashboardLink.scroll();
           utilObj.waitForDefaultTimeOut(); 
           //super.dashboardLink.click();
           //allure.addDescription("open the server instance");
        }
    }

}
//module.exports = new HomePage();
module.exports = new CheckoutPage();