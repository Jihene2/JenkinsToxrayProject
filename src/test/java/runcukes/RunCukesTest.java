package runcukes;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/Features", strict=true , glue="stepdefs" ,
        		plugin = {"pretty","html:target/HtmlReports","json:target/jihene.json"}
		)

public class RunCukesTest {

}
