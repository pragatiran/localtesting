import {test,expect,Browser,Page, Locator, BrowserContext} from "@playwright/test"
import {chromium} from "playwright"

test("login test",async()=>
{
    const browser:Browser=await chromium.launch({headless:false});

    //browserContext1: 
    const browser_Context1:BrowserContext = await browser.newContext();
    const page1:Page=await browser_Context1.newPage();

    //browserContext2: 
    const browser_Context2:BrowserContext = await browser.newContext();
    const page2:Page=await browser_Context2.newPage();

    //Browser1:
    await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailId:Locator=await page1.locator("#input-email");
    const password:Locator= await page1.locator("#input-password");
    const loginButton:Locator= await page1.locator("[value=Login]");
    await emailId.fill("pragatiranjan.neovasolutions@gmail.com");
    
    await password.fill("playwright");
    await page1.waitForTimeout(2000);
    //await loginButton.click();



    //Browser2:
    await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailId2:Locator=await page2.locator("#input-email");
    const password2:Locator= await page2.locator("#input-password");
    const loginButton2:Locator= await page2.locator("[value=Login]");
    await emailId2.fill("userpw@pw.com");
   
    await password2.fill("test@123");
    await page1.waitForTimeout(2000);
    await loginButton2.click();

    //After Doing your job Close the browser with its repective browser contexts
    await browser_Context1.close();
    await browser_Context2.close();
    await browser.close();
});