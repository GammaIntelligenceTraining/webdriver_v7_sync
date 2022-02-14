const { Given, When, Then } = require('@cucumber/cucumber');
const homeobject = require('../pageobjects/Home.page');
const aboutcompanyobject = require('../pageobjects/AboutCompany.page');


/*Given(/^User is on Home page$/,()=>{
    homeobject.open(); 
    homeobject.verifyCurrentPage();
});*/

When(/^User clicks Firmast link$/,()=>{
    homeobject.navigateToAboutPage();
});

Then(/^page Firmast is opened$/,()=>{
    aboutcompanyobject.verifyAboutCompanyPage();
});
