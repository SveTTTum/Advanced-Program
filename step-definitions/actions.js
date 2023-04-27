const {Given, When} = require(`@cucumber/cucumber`);
const loginPage = require(`../po/pages/login.page`);
const homePage = require(`../po/pages/home.page`);
const logger = require(`../support/logger`);
const creds = require(`../data/creds.json`);

Given(`I am on {string} page`, async function (pageName) {
	logger.info(`I am on ${pageName} page`);
	if (pageName == `Login`) {
		await loginPage.waitFor(loginPage.LoginButton);
	} else {
		await homePage.waitFor(homePage.UserBlock);
	}
});

When(`I logged in as {string} with password {string}`, async (username, password) => {
	await loginPage.submitLoginWithParameters(username, password);
});

When(`I logged in`, async () => {
	await loginPage.submitLoginWithParameters(creds.login, creds.password);
});

When(`I select {string} project`, async projectName => {
	logger.info(`I select ${projectName} project"`);
	await page.locator(homePage.ProjectsButton).click();
	const projects = require(`../data/projects.json`);
	const projectToSelect = projects[`${projectName}`];
	await page.getByRole(`link`, { name: `${projectToSelect}` });
});