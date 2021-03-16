const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ParkCalc extends Page {
    /**
     * define selectors using getter methods
     */
    


    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('parkcalc');
    }
}

module.exports = new ParkCalc();
