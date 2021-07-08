const Page = require('./Page');
const allure = require('wdio-allure-reporter');
const utilObj = require( '../helper/WaitActions')


class CatalogPage extends Page {

    //get CatalogLink() { return $('#hp > div.main > div.header.box > div.slogan > ul > li:nth-child(3) > a""]'); }
    get cart() { return $('#cart')};
    

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

    verifyCatalogPage() {                
        //this.cart.isDisplayed()
        if (this.cart.isDisplayed()) {
            allure.createStep('User is on Catalog');
        }
        else {
           // super.dashboardLink.scroll();
           utilObj.waitForDefaultTimeOut(); 
           throw "Something went wrong, User is not in Catalog"
           //super.dashboardLink.click();
           //allure.addDescription("open the server instance");
        }
    }

}
//module.exports = new HomePage();
module.exports = new CatalogPage();