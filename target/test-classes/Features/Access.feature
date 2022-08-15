@TALAC-814
Feature: Acces to the website


	@TEST_TALAC-816
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

  