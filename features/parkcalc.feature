Feature: Parking Cost Calculator

  Scenario Outline: As a user, I can calculate my parking cost

    Given I am on the parkCalc page
    When I choose a <Parking Lot>
    Then the rate is <Parking Rates> so the price is <Parking Price>
    Then the cost should be calculated propertly with the entry date-time and leaving date-time provided

    Examples:
      | Parking Lot        | Parking Rates                              | Parking Price | 
      | Valet Parking      | per day                                    | 18            |
      | Valet Parking      | for five hours or less                     | 12            |
      | Short Term Parking | $2 first hour, $1 each additional 1/2 hour | 2 , 1         |
      | Short Term Parking | daily maximum                              | 24            |