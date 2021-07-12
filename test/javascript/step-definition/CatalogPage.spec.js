const { Given, When, Then } = require('@cucumber/cucumber');
const homeobject = require('../pageobjects/Home.page');
const catalogobject = require('../pageobjects/Catalog.page');


Given(/^User is on Home page$/,()=>{
    homeobject.open(); 
    homeobject.verifyCurrentPage();
});

Given(/^Admin is on Admin page$/,()=>{
    homeobject.openAdmin(); 
    //homeobject.verifyCurrentPage();
});

When(/^User clicks Catalog link$/,()=>{
    homeobject.navigateToCatalogPage();
});

When(/^User selects first item$/,()=>{
    catalogobject.selectFirstItem();
});

When(/^User adds item to cart$/,()=>{
    catalogobject.addItemToCart();
});

When(/^User clicks cart$/,()=>{
    catalogobject.clickTotalCart();
});

When(/^User processes with order$/,()=>{
    catalogobject.processWithOrder();
});

When(/^User selects Guest option$/,()=>{
    catalogobject.processAsGuest();
});


When(/^User enters the personal details as Guest$/,()=>{
    catalogobject.fillTheGuestPersonalInfo();
});

When(/^User does not select delivery mode$/,()=>{
    catalogobject.verifyCatalogPage();
});

Then(/^User should see confirmation of order$/,()=>{
    catalogobject.verifyCatalogPage();
})

Then(/^User moves to Catalog page$/,()=>{
    catalogobject.verifyCatalogPage();
})