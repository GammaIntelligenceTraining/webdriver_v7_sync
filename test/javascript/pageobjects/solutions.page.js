const Page = require('./Page');
const allure = require('wdio-allure-reporter');
const utilObj = require( '../helper/WaitActions')


class SolutionsPage extends Page {

    //get SolutionsLink() { return $('#hp > div.main > div.content.box > ul:nth-child(1) > li:nth-child(1) > p.more > a); }
    get SolutionsTitle() { return $('#SolutionsTatle')};
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

    verifySolutionsPage() {                
        //this.Solutions.isDisplayed()
        if (this.SolutionPage.isDisplayed()) {
            allure.createStep('User is on Solution');
        }
        else {
           // super.dashboardLink.scroll();
           utilObj.waitForDefaultTimeOut(); 
           throw "Something went wrong, User is not in Solution"
           //super.dashboardLink.click();
           //allure.addDescription("open the server instance");
        }
    }

}
//module.exports = new HomePage();
module.exports = new SolutionsPage();