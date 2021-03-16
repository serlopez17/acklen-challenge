const { Given, When, Then } = require('@cucumber/cucumber');

const ParkCalc = require('../pageobjects/parkcalc.page');

const pages = {
    parkCalc: ParkCalc
}

Given(/^I am on the (\w+) page$/, (page) => {
    pages[page].open()
    browser.debug()
});

