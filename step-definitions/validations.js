const { Then } = require(`@cucumber/cucumber`);
const { expect } = require(`@playwright/test`);
const logger = require(`../support/logger`);
const DashboardsPage = require(`../po/pages/dashboards.page`);


Then(`The title should be {string}`, async title => {
	logger.info(`The title should be ${title}`);
	await expect(page).toHaveTitle(title);
});

Then(`I see all fields in dashboard header`, async () => {
	logger.info(`I see all fields in dashboard header`);
	const dashboardHeaderData = require(`../data/DashboardsHeader.json`);
	const headerFields = await page.locator(DashboardsPage.HeaderFields);
	const headerFieldsTitles = await headerFields.allInnerTexts();
	expect(headerFieldsTitles).toMatchObject(dashboardHeaderData);
});