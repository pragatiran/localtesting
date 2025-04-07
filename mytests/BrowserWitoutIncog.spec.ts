import { test, expect, Browser, Page, Locator, BrowserContext } from "@playwright/test";
import { chromium } from "playwright";

test("Login Page", async () => {
    const browser: BrowserContext = await chromium.launchPersistentContext('./session', { headless: false });
    const pages=browser.pages();
    const page: Page = pages[0];
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
});