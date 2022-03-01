Feature: Mechanic features

    Scenario: the page changes after login
    Given the login page
    Then the 'items' element should be there

    Scenario: the page changes after login and user clicks an item 
    Given the login page for mechanic
    Then the 'site' element should be there


Scenario: the page changes after login and user clikcs an item and site
    Given the login page for mechanic
    Then the 'entranceMachine' element should be there

Scenario: the page changes when using the breadcumb trail
    Given the login page for back track
    When the user clicks entrance to go back
    Then the 'entranceMachine' element should be there