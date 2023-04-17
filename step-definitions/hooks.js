const { Before, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

setDefaultTimeout(60000);

Before(async () => {
    try {
        browser = await chromium.launch({ headless: false});
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('http://localhost:8080');
    }
    catch (err) {
        throw new Error(`chrome navigation to ${page} failed due to ${err}`);
    }
    return page;
 });
 
 After(async function () {
    await browser.close();
 });