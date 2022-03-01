Feature: Admin Features

    Scenario: login
        Given the login page
        Then the 'username' element should be missing

    Scenario: Checking list goes up when new customer added
        Given the login page
        When the user clicks createCustomer and OK
        Then the 'addedItem' element should be increment

    Scenario: Site Added
        Given the login page and user clicks item
        When the user clicks createSite and OK
        Then the 'addedSite' element should be increment

    Scenario: Machine Added
        Given the login page and user clicks item and site
        When the user clicks createMachine and OK
        Then the 'addedMachine' element should be increment