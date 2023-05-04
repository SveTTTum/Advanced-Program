const loginPage = require(`../../po/pages/login.page`);
const homePage = require(`../../po/pages/home.page`);
const creds = require(`../../data/creds.json`);
const DashboardsPage = require(`../../po/pages/dashboards.page`);
const dashboardHeaderData = require(`../../data/DashboardsHeader.json`);
const dashboardHeaderButtomns = require(`../../data/DashboardHeaderButtons.json`);
const dashboardWidgets = require(`../../data/DemoDashboardWidgets.json`);
jest.setTimeout(20 * 1000);

beforeAll(async () => {
	await page.goto(`http://localhost:8080`);
	await loginPage.submitLoginWithParameters(creds.login, creds.password);
	await homePage.waitFor(homePage.UserBlock);
	await page.locator(homePage.ProjectsButton).click();
	await page.getByRole(`link`, { name: `sviatlana_tumilevich_personal` });
});

test(`Verify that dashboard contains expected fields in header`, async () => {
	const headerFields = await page.locator(DashboardsPage.HeaderFields);
	const headerFieldsTitles = await headerFields.allInnerTexts();
	expect(headerFieldsTitles).toMatchObject(dashboardHeaderData);
});

test(`Verify that Demo Dashboard has all header buttons`, async () => {
	const elementToClick = await page.locator(DashboardsPage.DemoDashboard);
	await elementToClick.isVisible();
	await elementToClick.click();
	const headerButtons = await page.locator(DashboardsPage.HeaderButtons);
	const headerButtonsTitles = await headerButtons.allInnerTexts();
	expect(headerButtonsTitles).toMatchObject(dashboardHeaderButtomns);
	const widgetsHeader = await page.locator(DashboardsPage.Widgets);
	const widgetsHeaderText = await widgetsHeader.allInnerTexts();
	expect(widgetsHeaderText).toMatchObject(dashboardWidgets);
});