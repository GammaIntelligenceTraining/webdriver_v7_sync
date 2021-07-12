const Page = require('./Page');
const allure = require('wdio-allure-reporter');
const utilObj = require( '../helper/WaitActions')


class NewsPage extends Page {

    get newsTitle() { return $('#hp > div.main > div.content.box > h3:nth-child(1) > strong > i')};
    

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

    verifyNewsPage() {                
        //this.cart.isDisplayed()
        if (this.newsTitle.isDisplayed()) {
            allure.createStep('User is on catalog');
        }
        else {
           // super.dashboardLink.scroll();
           utilObj.waitForDefaultTimeOut(); 
           throw "Something went wrong, User is not in catalog"
           //super.dashboardLink.click();
           //allure.addDescription("open the server instance");
        }
    }

}
//module.exports = new HomePage();
module.exports = new NewsPage();