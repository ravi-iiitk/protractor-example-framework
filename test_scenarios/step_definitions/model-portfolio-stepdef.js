var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var  model_page =  require('../../page_objects/model-portfolio-page.js');

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 10000);

Given('I Navigate to model portfolio page', function () {
    // Write code here that turns the phrase above into concrete actions
    model_page.modelpage.goToURL();
    model_page.modelpage.verifyModelPortfolioPageOpen();
    return browser.getTitle().then(function(text){
        console.log('Title of Web Page is -: ' + text);
    });
});


When('I Select All Weather Strategy by clicking on Explore Investment Ideas', function () {
    // Write code here that turns the phrase above into concrete actions
    model_page.modelpage.clickOnExploreInvestIdesButton("all-weather");
    model_page.modelpage.verifyWeatherPortfolioPagOpen();
    return browser.getTitle().then(function(text){
        console.log('Title of Web Page is -: ' + text);
    });
});

When('In next screen I click on button Customize Portfolio to make changes to portfolio', function () {
    // Write code here that turns the phrase above into concrete actions
    model_page.modelpage.clickOnCustomizePortfolioLink();
    model_page.modelpage.verifyCustomizePortfolioPageOpen();
    return browser.getTitle().then(function(text){
        console.log('Title of Web Page is -: ' + text);
    });
});


Then('I Click on Customize button to enable edit controls', function () {
    // Write code here that turns the phrase above into concrete actions
    model_page.modelpage.clickOnCustomizeLink();
    model_page.modelpage.verifyPortfolioCutomizable();
    return browser.getTitle().then(function(text){
        console.log('Title of Web Page is -: ' + text);
    });
});


Then('I Change slider of SPDR S and P {int} ETF TRUST SPY US EQUITY to {int} Percent', function (int, int_val) {
    // Write code here that turns the phrase above into concrete actions
    model_page.modelpage.moveTheEquityRangeSlider(int_val);
    model_page.modelpage.verifyEquitySliderMoved(int_val);
    return browser.getTitle().then(function(text){
        console.log('Title of Web Page is -: ' + text);
    });
});


Then('Click on Rebalance button', function () {
    // Write code here that turns the phrase above into concrete actions
    model_page.modelpage.clickOnRebalanceLink();
    model_page.modelpage.verifyReblanceDone();
    return browser.getTitle().then(function(text){
        console.log('Title of Web Page is -: ' + text);
    });
});


When('I Click on Invest button', function () {
    // Write code here that turns the phrase above into concrete actions
    model_page.modelpage.clickOnInvestLink();
    model_page.modelpage.verifyInvestLinkClickDone();
    return browser.getTitle().then(function(text){
        console.log('Title of Web Page is -: ' + text);
    });
});

Then('On next page I must see that SPDR... under What your portfolio contain ? to be {int} percent', function (int_val) {
    // Write code here that turns the phrase above into concrete actions
    model_page.modelpage.verifyTheSPDRPercentage();
    return browser.getTitle().then(function(text){
        console.log('Title of Web Page is -: ' + text);
    });
});



// Next Scenario Step Defination : TestB

Then('I Click on Customise button and then ensure the text change to Reset', function () {
    // Write code here that turns the phrase above into concrete actions
    model_page.modelpage.verifyPortfolioCutomizable();
    return browser.getTitle().then(function(text){
        console.log('Title of Web Page is -: ' + text);
    });
});

When('I Click on +Add Stock', function () {
    // Write code here that turns the phrase above into concrete actions
    model_page.modelpage.clickOnAddStock();
    return browser.getTitle().then(function(text){
        console.log('Title of Web Page is -: ' + text);
    });
});


When('I Click Add Stock in BT Group plc row.', function () {
    // Write code here that turns the phrase above into concrete actions
    model_page.modelpage.clickOnTheDesiredETF("BT Group plc");
    return browser.getTitle().then(function(text){
        console.log('Title of Web Page is -: ' + text);
    });
});

When('I Click on Done', function () {
    // Write code here that turns the phrase above into concrete actions
    model_page.modelpage.clickOnDoneButton();
    return browser.getTitle().then(function(text){
        console.log('Title of Web Page is -: ' + text);
    });
});

Then('I must see whether BT Group plc is added to the portfolio', function () {
    // Write code here that turns the phrase above into concrete actions
    model_page.modelpage.verifyStockAdded("BT Group plc");
    return browser.getTitle().then(function(text){
        console.log('Title of Web Page is -: ' + text);
    });
});


// STEP DEFs FOR TEST C

When('I Check whether tabs with below texts are available now Where X and Y are are numbers', function () {
    // Write code here that turns the phrase above into concrete actions
    model_page.modelpage.verifyTheTabs();
    return browser.getTitle().then(function(text){
        console.log('Title of Web Page is -: ' + text);
    });
});

Then('I must see X Portfolio recommendations based on your preferences', function () {
    // Write code here that turns the phrase above into concrete actions
    model_page.modelpage.verifyTabNames();
    return browser.getTitle().then(function(text){
        console.log('Title of Web Page is -: ' + text);
    });
});

Then('I must see Y other portfolio choices available', function () {
    // Write code here that turns the phrase above into concrete actions
    model_page.modelpage.verifyTabNames();
    return browser.getTitle().then(function(text){
        console.log('Title of Web Page is -: ' + text);
    });
});

When('I Resize browser window to {int} x {int}', function (weidth, hegight) {
    // Write code here that turns the phrase above into concrete actions
    model_page.modelpage.reSizeWindow(weidth,hegight);
});


When('I Check whether tabs with below texts are available now also Where X and Y are are numbers', function () {
    // Write code here that turns the phrase above into concrete actions
    model_page.modelpage.verifyTheTabsSamllWindow();
    return browser.getTitle().then(function(text){
        console.log('Title of Web Page is -: ' + text);
    });
});

Then('I must see Recommended X', function () {
    // Write code here that turns the phrase above into concrete actions
    model_page.modelpage.verifyTabNamesSamllWindow();
    return browser.getTitle().then(function(text){
        console.log('Title of Web Page is -: ' + text);
    });
});

Then('I must see Others Y', function () {
    // Write code here that turns the phrase above into concrete actions
    model_page.modelpage.verifyTabNamesSamllWindow();
    return browser.getTitle().then(function(text){
        console.log('Title of Web Page is -: ' + text);
    });
});

When('I Check X, Y are same', function () {
    // Write code here that turns the phrase above into concrete actions
    model_page.modelpage.verfiyValueOfX();
    return browser.getTitle().then(function(text){
        console.log('Title of Web Page is -: ' + text);
    });
});

Then('I must them as in step {int}', function (int) {
    // Write code here that turns the phrase above into concrete actions
    model_page.modelpage.verfiyValueOfY();
    return browser.getTitle().then(function(text){
        console.log('Title of Web Page is -: ' + text);
    });
});

