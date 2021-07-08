const { Given, When, Then } = require('@cucumber/cucumber');
const homeobject = require('../pageobjects/Home.page');
const Solutionsobject = require('../pageobjects/Solutions.page');


Given(/^User is on Home page$/,()=>{
    homeobject.open(); 
    homeobject.verifyCurrentPage();
});

Given(/^Admin is on Admin page$/,()=>{
    homeobject.openAdmin(); 
    //homeobject.verifyCurrentPage();
});

When(/^User clicks Solutions link$/,()=>{
    homeobject.navigateToSolutionsPage();
});

Then(/^User moves to Solutions page$/,()=>{
    Solutionsobject.verifySolutionsPage();
})