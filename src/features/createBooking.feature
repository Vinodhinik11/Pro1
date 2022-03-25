@booking
Feature: Create a Booking

  Scenario: User is able to create booking for future dates
    Given I am on the createBooking page
   When I enter valid details for booking
   Then I should see my booking submitted

 #Scenario Outline: Multiple entry validation
  # Given I am on the createBooking page
  #When I chose <location>, <product>, I enter valid details for booking
  # Then I should see payment page
  # Examples:
  #|location|product|
  #|Bradford Clinic|Express RT-PCR Test - Fit To Fly (Results in 3 hours)|
  #|Bradford Clinic|Mandatory Day 2(Results within 3hrs)|
