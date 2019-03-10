var protractor = require('protractor');
var browser = protractor.browser;
var element = require('protractor');
var assert = require('assert');
var commonlib =  require("../common_library/protractor_common.js");
const desiredURL = "https://sfo-demo.herokuapp.com/model-portfolio";

exports.modelpage ={


    goToURL : function () {
        protractor.browser.ignoreSynchronization = true;
        browser.driver.get(desiredURL).then(function () {
            browser.driver.sleep(1000).then(function () {
                console.log("Web Page Opened");
            });
        });
        browser.driver.manage().window().maximize().then(function () {
            console.log("Window Maximized");
        });
    },

    verifyModelPortfolioPageOpen : function(){
        commonlib.protractor_common.check_element_visible(this.mainsearch_field);
    },
};