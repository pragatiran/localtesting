import {test,expect,Browser,Page, Locator, BrowserContext} from "@playwright/test"
import {chromium} from "playwright"
test("Basic auth",async ()=>
    {
        const browser:Browser = await chromium.launch({headless:false,channel:"chrome"});
        const context:BrowserContext = await browser.newContext();
        const page3:Page = await context.newPage();
        //await page3.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth"); hard codded credentials
        const userpw = "admin:admin";
        const authHeaader = "Basic " +btoa(userpw);
        await page3.setExtraHTTPHeaders({
            "Authorization":authHeaader
        });
        await page3.goto("https://the-internet.herokuapp.com/basic_auth");  
    
         // Capture the text that appears after login
         const successMessageLocator = page3.locator("p"); // Adjust the selector based on the element containing the text
         const successMessage = await successMessageLocator.textContent();
     
         // Log the captured text
         console.log("Captured Text:", successMessage);
     
         // Close the browser
         await browser.close();
    
    
    }); 