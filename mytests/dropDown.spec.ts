import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { chromium } from "playwright";

test("Select based Drop Down test", async () => {
    const browser: Browser = await chromium.launch({ headless: false ,channel: "chrome" });
    const page: Page = await browser.newPage();

    // Navigate to the login page
    await page.goto("https://www.magupdate.co.uk/reader-enquiry/PATI/232");
     // Select an option from the dropdown
     const countryDropDown = "#Contact_CountryCode";
     await page.selectOption(countryDropDown, { value: "AD" }); // Replace with the desired option
 
     // Optionally, verify the selected value
     const selectedValue = await page.locator(countryDropDown).inputValue();
     console.log("Selected Country:", selectedValue);

     
 
     // Close the browser
     await browser.close();
     

});