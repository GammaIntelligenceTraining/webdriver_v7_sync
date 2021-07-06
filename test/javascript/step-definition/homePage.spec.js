const { Given, When, Then } = require('@cucumber/cucumber');
const homeobject = require('../pageobjects/Home.page');


Given(/^User is on dashboarde$/,()=>{
    var title = browser.getTitle();
    //console.log(title);
    homeobject.open(); 
    homeobject.adminLogin();
    homeobject.verifyCurrentPage();
});

When(/^Select the home button$/,()=>{
    homeobject.navigateToHomepage();
});

Then(/^User moves to home page$/,()=>{
    homeobject.verifyHomePage();
})