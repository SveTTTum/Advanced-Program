const { Before, BeforeAll, After, AfterAll, setDefaultTimeout } = require(`@cucumber/cucumber`);
const { chromium } = require(`playwright`);

setDefaultTimeout(60000);

BeforeAll(async () => {
	browser = await chromium.launch({ headless: false });
});

Before(async () => {
	context = await browser.newContext();
	page = await context.newPage();
	await page.goto(`http://localhost:8080`);
});

After(async function () {
	await context.close();
});

AfterAll(async function () {
	await browser.close();
});