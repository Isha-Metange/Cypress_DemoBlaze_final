Feature: End to End Testing an ecommerce website

Scenario: Test the user is successfully login to an ecommerce website

Given I open Ecommerce Page
When I signUp to ecommerce website
     | username | password |
     | test@123 | test@123 |

When I login to ecommerce website
     | username | password |
     | test@123 | test@123 |

Then Verify login is successfully 

Scenario: Test the user is successfully purchase the product
Given I open Ecommerce Page
When  I select the Product
When  I purchase the product
      | name | country | city      | creditcard | month     | year |
      | Riya | India   | Ahmedabad | Rupay      | September | 2024 |
Then Verify the product is successfully purchased


