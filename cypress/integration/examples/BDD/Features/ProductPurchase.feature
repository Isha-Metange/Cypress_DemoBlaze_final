Feature: Feature name

    Feature Description

Scenario: Test the user is successfully purchase the product
Given I open Ecommerce Page
When  I select the Product
When  I purchase the product
      | name | country | city      | creditcard | month     | year |
      | Riya | India   | Ahmedabad | Rupay      | September | 2024 |
Then Verify the product is successfully purchased