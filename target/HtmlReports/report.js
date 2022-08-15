$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Access.feature");
formatter.feature({
  "name": "Acces to the website",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TALAC-814"
    }
  ]
});
formatter.scenarioOutline({
  "name": "verify that the user can create a checklist",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TEST_TALAC-816"
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
      "name": "@TALAC-814"
    },
    {
      "name": "@TEST_TALAC-816"
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
});