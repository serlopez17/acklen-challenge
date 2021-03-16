const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ParkCalc extends Page {
    /**
     * define selectors using getter methods
     */
    get parkingLotDropDown () {return $('#ParkingLot')}
    get startingDate () {return $('#StartingDate')}
    get startingTime () {return $('#StartingTime')}
    // get startingTimeAM () {
    //     const selector
    //     browser.execute(()=> {
    //         selector = document.querySelectorAll("input[value=AM]")
    //     })
    //     return $('input[name="StartingTimeAMPM"]')
    // }
    get startingTimePM () {return $('input[name="StartingTimeAMPM"]')}

    calculateCost () {
        
    }
  
    


    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('parkcalc');
    }
}

module.exports = new ParkCalc();
