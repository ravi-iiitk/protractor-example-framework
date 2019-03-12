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
    And I must also see that output word in CAPITAL Letter


  Scenario Outline: : Verify the output words from program
    Given Given User provides the command to run Program
    And Also user provides the file name argument
    And Dictionary using the -D Option
    When User hits enter
    Then Program should for each <input_number> line give valid <output_word>

    Examples:
      | input_number           | output_word                             |
      | 2255.63                | CALL-ME                                 |
      | 7877678                | SUPPORT                                 |
      | 43556                  | HELLO                                   |
      | 9830404126             | [SKIP]                                  |
      | 12                     | [SKIP]                                  |
      | 0                      | [SKIP]                                  |
      | 123                    | 1-AD,1-AE,1-AF,1-BC,1-BE,1-BF,1-CD,1-CE |
      | [space]2255.63 [space] | [NO-SPACE] CALL-ME [NO SPACE]           |
      | 2255,63                | CALL-ME                                 |
      | 2255.63                | CALL-ME                                 |
      | 2255-63                | CALL-ME                                 |
      | 2255!63                | CALL-ME                                 |
      | .2255!63.              | CALL-ME                                 |
      | 2255&63                | CALL-ME                                 |
      | 2255;63                | CALL-ME                                 |
      | {2255;63}              | CALL-ME                                 |
      | [2255;63]              | CALL-ME                                 |
      | [2255=63]              | CALL-ME                                 |
      | [2255-63]              | CALL-ME                                 |
      | (2255-63)              | CALL-ME                                 |
      | (2255 $ 63)            | CALL-ME                                 |
      | (2255 % 63)            | CALL-ME                                 |
      | (2255 * 63)            | CALL-ME                                 |
      | (2255 ^ 63)            | CALL-ME                                 |
      | #2255 ^ 63#            | CALL-ME                                 |
      | #2255 ~ 63#            | CALL-ME                                 |
      | #2255 @ 63#            | CALL-ME                                 |
      | +91-2255-63            | 91-CALLME                               |
      | 0000000                | [SKIP]                                  |
      | 11111111               | [SKIP]                                  |
      | 8888888899999999       | [SKIP]                                  |
      | !@#$&^#$(&#@*$&#@$     | [SKIP]                                  |
      | FADSFAdfasdfa23213     | [SKIP]                                  |
      | !@#$&SDSADSA312132     | [SKIP]                                  |
      | 2                      | [SKIP]                                  |
      | 1-51716                | 1-JAPAN                                 |