import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { chromium } from "playwright";

test("Login Page", async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();

    // Navigate to the login page
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    // Locate input fields and login button
    const emailId: Locator = page.locator("#input-email");
    const password: Locator = page.locator("#input-password");
    const loginButton: Locator = page.locator("[value=Login]");

    // Perform login
    await emailId.fill("userpw@pw.com");
    await password.fill("test@123");
    await loginButton.click();

    // Capture and log success message (if any)
    const successMessage: Locator = page.locator(".alert-success"); // Adjust selector based on the page
    if (await successMessage.isVisible()) {
        console.log("Login Success Message:", await successMessage.textContent());
    } else {
        console.log("Login failed or no success message displayed.");
    }

    // Close the browser
    await browser.close();
});