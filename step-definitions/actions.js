const {Given, When, Then} = require(`@cucumber/cucumber`);
const { expect } = require(`@playwright/test`);
const loginPage = require(`../po/pages/login.page`);
const homePage = require(`../po/pages/home.page`);
const logger = require(`../support/logger`);

Given(`I am on Login page`, async function () {
	logger.info(`Page title should be "Report Portal"`);
	await loginPage.waitFor(loginPage.LoginButton);
});

Then (`The title should be {string}`, async function (title) {
	logger.info(`The title should be ${title}`);
	await expect(loginPage).toHaveTitle(title);
});

Then(`I wait {int} seconds`, async sec => {
	logger.info(`I wait ${sec} seconds`);
	await loginPage.pause(sec * 1000);
});

When(`I logged in as {string} with password {string}`, async (username, password) => {
	await loginPage.submitLoginWithParameters(username, password);
});

Given(`I am on Home page`, async function () {
	logger.info(`Page title should be "Report Portal"`);
	await homePage.waitFor(homePage.UserBlock);
});