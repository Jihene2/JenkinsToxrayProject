$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Access.feature");
formatter.feature({
  "name": "Acces to the website",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@scenario"
    }
  ]
});
formatter.scenarioOutline({
  "name": "verify that the user can create a checklist",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "browser is open user put the link of the website",
  "keyword": "Given "
});
formatter.step({
  "name": "write \u003ctodo\u003e and clicks enter",
  "keyword": "When "
});
formatter.step({
  "name": "write \u003ctodo1\u003e and clicks enter",
  "keyword": "And "
});
formatter.step({
  "name": "write \u003ctodo2\u003e and clicks enter",
  "keyword": "And "
});
formatter.step({
  "name": "the writen \u003ctodo\u003e will be added to the list",
  "keyword": "Then "
});
formatter.step({
  "name": "the writen \u003ctodo1\u003e will be added to the list",
  "keyword": "And "
});
formatter.step({
  "name": "the writen \u003ctodo2\u003e will be added to the list",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "todo",
        "todo1",
        "todo2"
      ]
    },
    {
      "cells": [
        "Etudier",
        "analyser",
        "soumettre"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verify that the user can create a checklist",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scenario"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "browser is open user put the link of the website",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.accesSteps.openBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "write Etudier and clicks enter",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.accesSteps.write_to_do(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "write analyser and clicks enter",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.accesSteps.write_to_do(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "write soumettre and clicks enter",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.accesSteps.write_to_do(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the writen Etudier will be added to the list",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.accesSteps.the_writen_ToDo_will_be_added_to_the_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the writen analyser will be added to the list",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.accesSteps.the_writen_ToDo_will_be_added_to_the_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the writen soumettre will be added to the list",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.accesSteps.the_writen_ToDo_will_be_added_to_the_list(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "when user clicks on the todo the to do should be removed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@scenario"
    },
    {
      "name": "@tag1"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "user selects the to do",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.accesSteps.user_selects_the_to_do()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepdefs.accessPage.tacheComplete(accessPage.java:57)\r\n\tat stepdefs.accesSteps.user_selects_the_to_do(accesSteps.java:47)\r\n\tat ✽.user selects the to do(file:///C:/Users/jsaidane/eclipse-workspace/Cucumber/src/test/resources/Features/Access.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the to do is bared",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.accesSteps.the_to_do_is_bared()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close window",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.accesSteps.close_window()"
});
formatter.result({
  "status": "skipped"
});
});