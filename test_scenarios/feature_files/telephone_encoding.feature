Feature: To test the digit replacement program with alphabets.

  Scenario: verify if No file as parameter is passed
    Given User run the program without the file name argument
    When User hit return
    Then Program should wait for input from STDIN
    And If user gives input from stdin & hit return
    Then Output should come as stdout


  Scenario: Verify Output format
    Given User provides the command to run Program
    And Also user provides the file name argument
    Then On hitting enter program shoul give output
    When I look at the output fomate
    Then I must see this format as output Number-Word


  Scenario:

