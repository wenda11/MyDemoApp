Feature: My Demo App

  Scenario Outline: As a user, I can navigated to details of specific item

    Given I am on products screen
    When I select specific item
    Then I am navigated to itemDetails screen

  Scenario Outline: As a user, I cannot proceed through empy cart

    Given I am on products screen
    When I navigate to empty cart
    Then I am shown No items in cart validation message

  Scenario Outline: As a user, I can add item to cart

    Given I am on itemDetails screen
    When I add item to cart
    Then Item is added to cart
