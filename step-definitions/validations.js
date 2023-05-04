const { Then } = require(`@cucumber/cucumber`);
const { expect } = require(`@playwright/test`);
const logger = require(`../support/logger`);
const DashboardsPage = require(`../po/pages/dashboards.page`);
const dashboardHeaderData = require(`../data/DashboardsHeader.json`);
const dashboardHeaderButtomns = require(`../data/DashboardHeaderButtons.json`);

Then(`The title should be {string}`, async title => {
	logger.info(`The title should be ${title}`);
	await expect(page).toHaveTitle(title);
});

Then(`I see all fields in dashboard header`, async () => {
	logger.info(`I see all fields in dashboard header`);
	const headerFields = await page.locator(DashboardsPage.HeaderFields);
	const headerFieldsTitles = await headerFields.allInnerTexts();
	expect(headerFieldsTitles).toMatchObject(dashboardHeaderData);
});

Then(`I see all header buttons on the selected dashboard`, async () => {
	logger.info(`I see all header buttons on the selected dashboard`);
	const headerButtons = await page.locator(DashboardsPage.HeaderButtons);
	const headerButtonsTitles = await headerButtons.allInnerTexts();
	expect(headerButtonsTitles).toMatchObject(dashboardHeaderButtomns);
});

Then(`I see all {string} on the selected dashboard`, async file => {
	logger.info(`I see all widgets on the selected dashboard`);
	const dashboardWidgets = require(`../data/${file}.json`);
	const widgetsHeader = await page.locator(DashboardsPage.Widgets);
	const widgetsHeaderText = await widgetsHeader.allInnerTexts();
	expect(widgetsHeaderText).toMatchObject(dashboardWidgets);
});