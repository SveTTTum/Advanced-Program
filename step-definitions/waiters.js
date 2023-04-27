const {Then} = require(`@cucumber/cucumber`);
const logger = require(`../support/logger`);
const loginPage = require(`../po/pages/login.page`);

Then(`I wait {int} seconds`, async sec => {
	logger.info(`I wait ${sec} seconds`);
	await loginPage.pause(sec * 1000);
});