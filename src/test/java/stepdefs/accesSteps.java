package stepdefs;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import stepdefs.accessPage;

public class accesSteps {
	WebDriver driver;
	accessPage access = new accessPage();
	
	
	
	// Scenario1
	
	@Given ("browser is open user put the link of the website")

	public void openBrowser() {
		access.launch(driver);
		access.browser_is_open();
	}
	
	@When("^write (.*) and clicks enter$")
	
	public void write_to_do(String arg1) {
		access.entrerTodo(arg1);
		access.clickerEntrer();
	}


	@Then("^the writen (.*) will be added to the list$")
	public void the_writen_ToDo_will_be_added_to_the_list(String arg1) {
		 access.verifier(arg1);
				
}
	// Scenario 2 
	
   @Given("user selects the to do")
     public void user_selects_the_to_do() {
    	 access.tacheComplete();
}

      @When("the to do is bared")
      public void the_to_do_is_bared() {
       access.tacheCloturer();
}

      @Then("close window")
      public void close_window() {
    	  driver.close();
       
}
	
	
}	


	


	

	