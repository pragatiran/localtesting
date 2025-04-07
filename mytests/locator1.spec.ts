import { test, expect, Browser, Page,Locator } from '@playwright/test';
import{chromium} from 'playwright';
test("locator test", async () => {

    const browser:Browser= await chromium.launch({headless:false,channel:"chrome"});
    const page:Page= await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    //locator
    //ID:unique
    const firstName:Locator=page.locator("id=input-firstname");
    const lastName:Locator=page.locator("id=input-lastname");
    await firstName.fill("Pragati");
    await lastName.fill("Ranjan");
    
    //ClassName: unique
    const logo:Locator=page.locator(".img-responsive");
    const logoExist=await logo.isEnabled();
    console.log("Logo is enabled:", logoExist);

    //text: unique
    const header:Locator=page.locator("text=Register Account");
    const headerExist=await header.isEnabled();
    console.log("Element is enabled:", headerExist);

    const continuebtnExist:Locator=page.locator("text=Continue");
    const continuebtn=await continuebtnExist.isEnabled();
    console.log("Continue button is enabled:", continuebtn);
    const forgetbtnExist:Locator=page.locator("text=Forgotten Password");
    const forgetbtn=await forgetbtnExist.isEnabled();
    console.log("Forgotten Password button is enabled:", forgetbtn);

    //cssSelector: with id
    const emailSelector:Locator=page.locator("input#input-email");

    //cssSelector: with name
    const telephoneSelector:Locator=page.locator('input[name="telephone"]');

    //cssSelector: with type
    const checkBox:Locator=page.locator("input[type='checkbox']");

    await emailSelector.fill("pragati@gmail.com");
    await telephoneSelector.fill("1234567890");
    await checkBox.click();
    
    //Xpath:
    const passwordSelector:Locator=page.locator("//input[@id='input-password']");
    const searchboxSelector:Locator=page.locator("//input[@name='search' and @type='text']");
    await passwordSelector.fill("test@123");
    await searchboxSelector.fill("test@123");



      
    
});