var protractor = require('protractor');
var browser = protractor.browser;
var element = browser.element;
var assert = require('assert');
var commonlib =  require("../common_library/protractor_common.js");
const desiredURL = "https://sfo-demo.herokuapp.com/model-portfolio";

exports.modelpage ={
    weather_explrinvestides_link : element(by.id("btn-explore79")),

    balanced_explrinvestides_link : element(by.id("btn-explore79")),

    allseason_explrinvestides_link : element(by.id("btn-explore79")),

    customize_portfolio_link : element(by.linkText("Customize Portfolio")),

    invest_now_link:element(by.linkText("Invest Now")),

    cutomize_link: element(by.linkText("Customise")),

    reset_link:element(by.linkText("Reset")),

    rebalance_link : element(by.linkText("Rebalance")),

    target_amount_field : element(by.id("targetAmt")),

    us_equity_spy : element(by.xpath("//input[@data-isin='SPY']")),

    spdr_eqitypercnt_label : element(by.xpath("//span[contains(text(),'13.79')]")),

    goToURL : function () {
        protractor.browser.ignoreSynchronization = true;
        browser.driver.get(desiredURL).then(function () {
            browser.driver.sleep(1000).then(function () {
                console.log("Web Page Opened:"+desiredURL);
            });
        });
        browser.driver.manage().window().maximize().then(function () {
            console.log("Browser Window Maximized");
        });
    },

    verifyModelPortfolioPageOpen : function(){
        commonlib.protractor_common.check_element_visible(this.weather_explrinvestides_link);
        commonlib.protractor_common.takeTheScreenshot("model-portfolio");
    },

    clickOnExploreInvestIdesButton : function (which_button) {
        commonlib.protractor_common.pressAKeyKeyboard("page-down");
        switch(which_button) {
            case "balanced":
                // code block
                commonlib.protractor_common.check_click(this.balanced_explrinvestides_link,20);
                break;
            case "all-weather":
                // code block
                commonlib.protractor_common.check_click(this.weather_explrinvestides_link,20);
                break;
            case "all-season":
                // code block
                commonlib.protractor_common.check_click(this.allseason_explrinvestides_link,20);
                break;
            default:
            // code block
        }
    },

    verifyWeatherPortfolioPagOpen : function(){
        commonlib.protractor_common.check_element_visible(this.customize_portfolio_link);
        commonlib.protractor_common.takeTheScreenshot("weather_portfolio");
    },

    clickOnCustomizePortfolioLink : function () {
        commonlib.protractor_common.check_click(this.customize_portfolio_link,20);
    },

    verifyCustomizePortfolioPageOpen : function(){
        commonlib.protractor_common.check_element_visible(this.invest_now_link,20);
        commonlib.protractor_common.takeTheScreenshot("Customize_portfolio");
    },

    clickOnCustomizeLink : function () {
        commonlib.protractor_common.pressAKeyKeyboard("page-down");
        commonlib.protractor_common.check_click(this.cutomize_link,20);
    },

    verifyPortfolioCutomizable : function(){
        commonlib.protractor_common.check_element_visible(this.reset_link,20);
        commonlib.protractor_common.takeTheScreenshot("Customize_portfolio_edit");
    },

    clickOnRebalanceLink : function () {
        commonlib.protractor_common.check_click(this.rebalance_link,20);
    },

    verifyReblanceDone : function(){
        commonlib.protractor_common.check_element_visible(this.rebalance_link,20);
        commonlib.protractor_common.takeTheScreenshot("Portfolio_Balanced");
    },

    clickOnInvestLink : function () {
        commonlib.protractor_common.check_click(this.invest_now_link,20);
    },

    verifyInvestLinkClickDone : function(){
        commonlib.protractor_common.check_element_visible(this.target_amount_field,20);
        commonlib.protractor_common.takeTheScreenshot("Invest_Now_Page");
    },

    moveTheEquityRangeSlider : function (position_value) {
        commonlib.protractor_common.moveMouseToPositionWithElement(this.us_equity_spy,position_value+31);
        browser.sleep(2000);
    },

    verifyEquitySliderMoved : function (value) {
        commonlib.protractor_common.verifyElementAttributeValue(this.us_equity_spy,"value",value.toString());
        commonlib.protractor_common.takeTheScreenshot("Equity_Range_Changed");
    },

    verifyTheSPDRPercentage : function () {
        commonlib.protractor_common.pressAKeyKeyboard("page-down");
        browser.sleep(1000);
        commonlib.protractor_common.pressAKeyKeyboard("page-down");
        browser.sleep(1000);
        commonlib.protractor_common.check_element_visible(this.spdr_eqitypercnt_label);
    }

};
