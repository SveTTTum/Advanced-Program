const loginPage = require(`../../po/pages/login.page`);
const homePage = require(`../../po/pages/home.page`);
jest.setTimeout(40 * 1000);

beforeAll(async () => {
	await page.goto(`http://localhost:8080`);
});

test(`Verify the Login page title is Report Portal`, async () => {
	await loginPage.waitFor(loginPage.LoginButton);
	await loginPage.waitFor(loginPage.UsernameInput);
	await loginPage.waitFor(loginPage.PasswordInput);
	const title = await page.title();
	await expect(title).toBe(`Report Portal`);
});

test(`Verification of the UI of the logged user`, async () => {
	await loginPage.submitLoginWithParameters(`superadmin`, `erebus`);
	await homePage.waitFor(homePage.UserBlock);
});