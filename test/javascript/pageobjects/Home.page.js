const Page = require('./Page');
const allure = require('wdio-allure-reporter');
const utilObj = require( '../helper/WaitActions')


class HomePage extends Page {

    get catalogLink() { return $('#hp > div.main > div.header.box > div.slogan > ul > li:nth-child(3) > a'); }
    get newsLink() { return $('#hp > div.main > div.header.box > div.slogan > ul > li:nth-child(2) > a'); }
    get solutionsLink() { return $('#hp > div.main > div.header.box > div.slogan > ul > li:nth-child(4) > a'); }

  
    /**
     * Method to verofy if current page is dashboard else navigate to dashboard
     */
    verifyCurrentPage() {
        let currentPage = browser.getTitle();
        if (currentPage.includes("Info Dekoor")) {
            allure.createStep('User is on Dashboard');
        }
        else {           
            //super.dashboardLink.click();
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

    navigateToCatalogPage() {
        utilObj.waitForDefaultTimeOut();
        this.catalogLink.click();
    }

    navigateToNewsPage() {
        utilObj.waitForDefaultTimeOut();
        this.newsLink.click();
    }

    navigateToSolutionsPage() {
        utilObj.waitForDefaultTimeOut();
        this.solutionsLink.click();
    }

}
//module.exports = new HomePage();
module.exports = new HomePage();