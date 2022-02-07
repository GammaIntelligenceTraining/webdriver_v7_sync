const { Given, When, Then } = require('@cucumber/cucumber');
const homeobject = require('../pageobjects/Home.page');
const catalogobject = require('../pageobjects/Catalog.page');


Given(/^User is on Home page$/,()=>{
    homeobject.open(); 
    homeobject.verifyCurrentPage();
});

When(/^User clicks Catalog link$/,()=>{
    homeobject.navigateToCatalogPage();
});

When(/^User clicks on Item link$/,()=>{
    catalogobject.clickFirstItem();
});

When(/^User clicks on Add to cart item button$/,()=>{
    catalogobject.clickAddToCartButton();
});

Then(/^User moves to Catalog page$/,()=>{
    catalogobject.verifyCatalogPage();
})