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

    add_stock_link : element.all(by.linkText("+ Add Stock")),

    etf_links : element.all(by.xpath("//div[@id='modal-1']//div[contains(@class,'modal-dialog modal-lg')]//div[@class='modal-content']//div[@class='modal-body']//div[@class='row']//div[@class='col-md-12']//div[@class='row stock-row vertical-align']//div[@class='col-md-4']//a[@href='#']")),

    done_button : element(by.xpath("//div[@id='modal-1']//button[@type='button'][contains(text(),'Done')]")),

    stock_links : element.all(by.xpath("//div[@class='row constituent-row vertical-align']//div[@class='col-md-4']//a[@href='#']")),

    name_label : element(by.xpath("//div[@id='modal-1']//div[@class='col-md-4'][contains(text(),'Name')]")),

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
        browser.sleep(1000);
        commonlib.protractor_common.pressAKeyKeyboard("page-down");
        browser.sleep(1000);
        commonlib.protractor_common.pressAKeyKeyboard("page-down");
        browser.sleep(1000);
        commonlib.protractor_common.check_element_visible(this.spdr_eqitypercnt_label);
    },

    clickOnAddStock : function () {
        commonlib.protractor_common.takeTheScreenshot("Before_Add_Stock_Click");
        commonlib.protractor_common.check_click(this.add_stock_link.get(0),20);
        browser.sleep(2000);
    },

    verifyAddStockLinkClicked()
    {
        commonlib.protractor_common.check_element_visible(this.done_button,20);
        commonlib.protractor_common.takeTheScreenshot("Add_Stock_Clicked");
        browser.sleep(2000);
    },
    clickOnTheDesiredETF(etf_name)
    {
        commonlib.protractor_common.check_click(this.name_label,20);
        for(var i=0;i<8;i++)
        {
            commonlib.protractor_common.pressAKeyKeyboard("page-down");
            browser.sleep(500);
        }
        var alletf_links = element.all(by.xpath("//div[@id='modal-1']//div[contains(@class,'modal-dialog modal-lg')]//div[@class='modal-content']//div[@class='modal-body']//div[@class='row']//div[@class='col-md-12']//div[@class='row stock-row vertical-align']//div[@class='col-md-4']//a[@href='#']"));
        alletf_links.count().then(function (noOfEtfs) {
            for(let i=0;i<noOfEtfs;i++)
            {
                var thisLink = alletf_links.get(i);
                thisLink.getText().then(function (actualLinkeName) {
                    var count = i;
                    console.log("The actual stock name is : "+actualLinkeName+"   The Expected link is : "+etf_name);
                    if(actualLinkeName === etf_name)
                    {
                        console.log("The ETF Found-- Clicking it at location :"+count);
                        var all_addsock_buttons = element.all(by.xpath("//div[@class='modal fade in']//button"));
                        browser.sleep(1000);
                        commonlib.protractor_common.check_click(all_addsock_buttons.get(count+1),20);
                    }
                })
            }
        })
    },

    clickOnDoneButton : function () {
        commonlib.protractor_common.check_click(this.done_button,20);
        commonlib.protractor_common.takeTheScreenshot("Stock_Added");
        browser.sleep(2000);
    },

    verifyStockAdded : function (stock_name) {
        commonlib.protractor_common.pressAKeyKeyboard("page-down");
        var all_stockLinks = element.all(by.xpath("//div[@class='row constituent-row vertical-align']//div[@class='col-md-4']//a[@href='#']"));
        all_stockLinks.count().then(function (noOfLinks) {
        console.log("No of links is:"+noOfLinks);
        var counter=0;
        var found = false;
        var reallyfound = false;
        for (var i = 0; i< noOfLinks && found ===false; i++) {
            all_stockLinks.get(i).getText().then(function (linkText) {
                console.log('Link Text of element is: ' + linkText);
                counter++;
                console.log("Value of Counter :"+counter);
                if(linkText.includes(stock_name))
                {
                    console.log("Link found");
                    found = true;
                    reallyfound = true;
                    checkTheFlag(reallyfound,found,counter,noOfLinks);
                }
                else
                {
                    found = false;
                    checkTheFlag(reallyfound,found,counter,noOfLinks);
                }

            })
        }
        });
        function checkTheFlag(reallyfound,found,counter,noOfLinks) {
            if(reallyfound===false && found===false&&counter===noOfLinks)
            {
                assert(found);
            }
        }
    }
};
