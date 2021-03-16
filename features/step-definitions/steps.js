const { Given, When, Then } = require('@cucumber/cucumber');

const ParkCalc = require('../pageobjects/parkcalc.page');

const pages = {
    parkCalc: ParkCalc
}

Given(/^I am on the (\w+) page$/, (page) => {
    pages[page].open()
});

When(/^I choose a (.+)$/, (parkingLot) => {
    console.log("Parking lot:" , parkingLot)
})

Then(/^the rate is (.+) so the price is (.+)$/, (rate,price) => {
    console.log("Rate:" , rate)
    console.log("Precioa:", price)
})

Then(/^the cost should be calculated propertly with the entry date-time and leaving date-time provided$/, () => {
    
})

