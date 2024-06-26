const { Given, When, Then } = require('@cucumber/cucumber');
const homeobject = require('../pageobjects/Home.page');
const latestnewsobject = require('../pageobjects/LatestNews.page');


/*Given(/^User is on Home page$/,()=>{
    homeobject.open(); 
    homeobject.verifyCurrentPage();
});*/

When(/^User clicks Viimased Uudised link$/,()=>{
    homeobject.navigateToLatestNewsPage();
});

Then(/^page Viimased Uudised is opened$/,()=>{
    latestnewsobject.verifyLatestNewsPage();
});
