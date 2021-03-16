const { Given, When, Then, setWorldConstructor } = require('@cucumber/cucumber');

const ParkCalc = require('../pageobjects/parkcalc.page');

const pages = {
    parkCalc: ParkCalc
}

// Data of scenarios is being stored on world to manage in all the steps
setWorldConstructor(function({attach,parameters}){
    this.attach = attach
    this.parameters = parameters
    this.scenarioData = {}
})

Given(/^I am on the (\w+) page$/, (page) => {
    pages[page].open()
});

When(/^I choose a (.+)$/, function (parkingLot) {
    this.scenarioData.parkingLot = parkingLot
})

Then(/^the rate is (.+) so the price is (.+)$/, function (rate,price) {
    this.scenarioData.rate = rate 
    this.scenarioData.price = price
})

Then(/^the cost should be calculated propertly with the entry date-time and leaving date-time provided$/, function () {
    pages["parkCalc"].calculateCost(this.scenarioData)
    console.log(this.scenarioData)
    console.log(this)
})

