const { Given, When, Then } = require('@cucumber/cucumber');
const homeobject = require('../pageobjects/Home.page');
const Newsobject = require('../pageobjects/NewsPage.page');




When(/^User clicks News link$/,()=>{
    homeobject.navigateToNewsPage();
});

Then(/^User moves to News page$/,()=>{
    NewsPageobject.verifyNewsPage();
})