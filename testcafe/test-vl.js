const { Selector } = require(`testcafe`);
const logger = require(`../support/logger`);

fixture(`Getting Started`)
	.page(`https://www.vitallaw.com/`)
	.beforeEach(async t => {
		const acceptCookiesButton = Selector(`#onetrust-accept-btn-handler`);
		await acceptCookiesButton.visible;
		logger.info(`Close cookies bunner`);
		await t.click(acceptCookiesButton);
		const pendoCloseButton = Selector(`._pendo-close-guide`);
		await pendoCloseButton.visible;
		logger.info(`Close pendo`);
		await t.click(pendoCloseButton);
	});

test(`Verify page title`, async t => {
	const pageTitle = Selector(`title`);
	const pageTitleText = await pageTitle.innerText;
	logger.info(`Page title should be "${pageTitleText}"`);
	await t.expect(pageTitleText).contains(`Legal News | VitalLaw.com`);
});

test(`Verify that Trademark area is open`, async t => {
	const areasMenu = Selector(`#areasMenuItem`);
	await t.click(areasMenu);
	const areaTrademark = Selector(`.cg-dropdown-menu-item-1-7-0`).withText(`Trademark`);
	await t.click(areaTrademark);
	const areaTitle = Selector(`.wk-primary-blue`);
	const areaTitleText = await areaTitle.innerText;
	logger.info(`Area Trademark must be open`);
	await t.expect(areaTitleText).eql(`Trademark`);
});