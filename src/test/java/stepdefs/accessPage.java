package stepdefs;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.By.ByClassName;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;


public class accessPage {
	

	By bar = new By.ByClassName("new-todo");
	By btn = new By.ByClassName("toggle");
	By Com = new By.ByClassName ("completed");
	WebDriver driver;
	public void launch (WebDriver driver){
		this.driver = driver;
		
	}
	
	
	    public void browser_is_open() {
		System.out.println("Inside Step - browser is open");
		String projectPath = System.getProperty("user.dir");
		System.out.println("Project path is : "+projectPath);
		System.setProperty("webdriver.chrome.driver", projectPath+"/src/test/resources/drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.navigate().to("http://todomvc.com/examples/react/#/");
	}
	
	
	
	
	public void entrerTodo(String arg1){
		
		driver.findElement(bar).sendKeys(arg1);
				
	}
	
public void clickerEntrer(){
		
		driver.findElement(bar).sendKeys(Keys.ENTER);
}
public void verifier(String arg1){
	
	String v= driver.findElement(bar).getText();
	v= arg1;
}

public void tacheComplete(){
        driver.findElement(By.xpath("//*[@id=\"toggle-all\"]")).click();
}
public void tacheCloturer() {
	driver.findElement(Com).isDisplayed();
}

}
