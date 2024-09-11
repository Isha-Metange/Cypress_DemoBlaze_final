Feature: End to End Testing an ecommerce website

    Scenario: Test the user is successfully login to an ecommerce website

        Given I open Ecommerce Page
        When I signUp to ecommerce website
            | username | password |
            | test@123 | test@123 |
        