const { Given, When, Then } = require('@cucumber/cucumber');
const homeobject = require('../pageobjects/Home.page');
const Solutionsobject = require('../pageobjects/Solutions.page');



When(/^User clicks Solutions link$/,()=>{
    homeobject.navigateToSolutionsPage();
});

Then(/^User moves to Solutions page$/,()=>{
    Solutionsobject.verifySolutionsPage();
})