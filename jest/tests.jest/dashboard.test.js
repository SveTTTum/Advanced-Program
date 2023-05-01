const loginPage = require(`../../po/pages/login.page`);
const homePage = require(`../../po/pages/home.page`);
const creds = require(`../../data/creds.json`);
const DashboardsPage = require(`../../po/pages/dashboards.page`);
const dashboardHeaderData = require(`../../data/DashboardsHeader.json`);
jest.setTimeout(40 * 1000);

beforeAll(async () => {
	await page.goto(`http://localhost:8080`);
});

test(`Verify that dashboard contains expected fields in header`, async () => {
	await loginPage.submitLoginWithParameters(creds.login, creds.password);
	await homePage.waitFor(homePage.UserBlock);
	await page.locator(homePage.ProjectsButton).click();
	await page.getByRole(`link`, { name: `sviatlana_tumilevich_personal` });
	const headerFields = await page.locator(DashboardsPage.HeaderFields);
	const headerFieldsTitles = await headerFields.allInnerTexts();
	expect(headerFieldsTitles).toMatchObject(dashboardHeaderData);
});