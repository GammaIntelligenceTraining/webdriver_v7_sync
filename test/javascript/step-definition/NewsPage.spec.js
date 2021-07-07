const { Given, When, Then } = require('@cucumber/cucumber');
const homeobject = require('../pageobjects/Home.page');
const newspageobject = require('../pageobjects/NewsPage.page');


/*Given(/^User is on Home page$/,()=>{
    homeobject.open(); 
    homeobject.verifyCurrentPage();
});*/

When(/^User clicks News link$/,()=>{
    homeobject.navigateToNewsPage();
});

Then(/^User moves to News page$/,()=>{
    newspageobject.verifyNewsPage();
})