const Page = require('./Page');
const allure = require('wdio-allure-reporter');
const utilObj = require( '../helper/WaitActions')


class CatalogPage extends Page {

    //get CatalogLink() { return $('#hp > div.main > div.header.box > div.slogan > ul > li:nth-child(3) > a""]'); }
    get cart() { return $('#cart')};
    get firstItemSelect() { return $('#content > table > tbody > tr:nth-child(4) > td:nth-child(1) > a > b')};
    get addToCartButton() { return $('#content > div.product-list > div > div.right > div > input')};
    get totalCart() {return $('#cart-total')};
    get processOrderLink() {return $('#cart > div.content > div.checkout > a:nth-child(2)')};
    get guestOption() {return $('#guest');}
    get processAsGuestButton() {return $('#button-account')};
    get firstName() {return $('#payment-address > div.checkout-content > div.left > input:nth-child(4)')};
    get lastName() {return $('#payment-address > div.checkout-content > div.left > input:nth-child(9)')};
    get email() {return $('#payment-address > div.checkout-content > div.left > input:nth-child(14)')};
    get phone() {return $('#payment-address > div.checkout-content > div.left > input:nth-child(19)')};
    get address() {return $('#payment-address > div.checkout-content > div.right > input:nth-child(11)')}
    get deliveryAddress() {return $('#payment-address > div.checkout-content > div.right > select:nth-child(35)')};
    get city() {return $('#payment-address > div.checkout-content > div.right > input:nth-child(20)')};
    get buttonRegister() { return $('#button-register')};
    get buttonGuest() { return $('#button-guest')};
    get buttonDelivery() { return $('#button-shipping-method')};
    get buttonPayment() { return $('#button-payment-method')};
    get buttonConfirm() { return $('#button-confirm')};
    
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

    selectFirstItem()
    {
        //browser.pause(5000);
        utilObj.waitForDefaultTimeOut(); 
        this.firstItemSelect.click();
    }

    addItemToCart()

    {
        //browser.pause(5000);
        utilObj.waitForDefaultTimeOut(); 
        this.addToCartButton.click();
    }

    clickTotalCart()
    {
        utilObj.waitForDefaultTimeOut(); 
        this.totalCart.click();
    }
     
    processWithOrder()
    {
        utilObj.waitForDefaultTimeOut(); 
        this.processOrderLink.click();
    }

    processAsGuest() {
        utilObj.waitForDefaultTimeOut(); 
        this.guestOption.click();
        this.processAsGuestButton.click();
        
    }

    fillTheGuestPersonalInfo(firstname, lastname) {
        this.firstName.click();
        this.firstName.setValue(firstname)
        this.lastName.click();
        this.lastName.setValue(lastname);
        this.email.click();
        this.email.setValue("someemail@someemail.com");
        this.phone.click();
        browser.pause(10000);
        this.phone.setValue("123455");
        this.city.click();
        this.city.setValue("tallinn");
        this.address.setValue("tallinn 123434");
        this.address.click(); 
        //TODO: Refactor this part
        $("#payment-address > div.checkout-content > div.right > select:nth-child(35)").selectByIndex(2);
        browser.pause(1000);
        this.buttonGuest.click();
        browser.pause(1000);
        this.buttonDelivery.click();
        browser.pause(1000);
        this.buttonPayment.click();
        browser.pause(1000);
        this.buttonConfirm.click();      
        browser.pause(1000);
    }


}
//module.exports = new HomePage();
module.exports = new CatalogPage();