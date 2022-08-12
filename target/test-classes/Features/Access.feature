@scenario
Feature: Acces to the website

  @tag1
  Scenario Outline: verify that the user can create a checklist
    Given browser is open user put the link of the website
    When write <todo> and clicks enter
    And write <todo1> and clicks enter
    And write <todo2> and clicks enter
    Then the writen <todo> will be added to the list
    And the writen <todo1> will be added to the list
    And the writen <todo2> will be added to the list

    Examples: 
      | todo    | todo1    | todo2     |
      | Etudier | analyser | soumettre |

  @tag1 @tag2
  Scenario: when user clicks on the todo the to do should be removed
    Given user selects the to do
    When the to do is bared
    Then close window
