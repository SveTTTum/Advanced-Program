const { Selector, ClientFunction } = require(`testcafe`);
const logger = require(`../support/logger`);
const { registeredUser } = require(`./utils`);

fixture`Open report portal page`
	.page`http://localhost:8080`;

// .httpAuth({
// 	username: `sviatlana_tumilevich`,
// 	password: `password`,
// });
// .beforeEach(async t => {
// 	await t.useRole(registeredUser);
// });
// .afterEach(async t => {
// 	await t.click(Selector(`.userBlock__avatar-wrapper--_Jkks `))
// 		.click(Selector(`.userBlock__menu-item--3VBsZ`));
// });

test(`I logged in`, async t => {
	await t.useRole(registeredUser);
	const dashboardsTitleElement = Selector(`.pageBreadcrumbs__page-breadcrumbs-item--1GzrN span`);
	const dashboardsTitle = await dashboardsTitleElement.innerText;
	logger.info(`Dashboard title should be ${dashboardsTitle}`);
	await t.expect(dashboardsTitle).contains(`ALL DASHBOARDS`);
});

test(`Drag & Drop test`, async t => {
	const usernameInput = Selector(`div.inputOutside__input-outside--3DBix.type-text > input`);
	await t.typeText(usernameInput, `sviatlana_tumilevich`);
	const passwordInput = Selector(`div.inputOutside__input-outside--3DBix.inputOutside__type-password--2sIQG > input`);
	await t.typeText(passwordInput, `password`);
	const loginButton = Selector(`.bigButton__big-button--ivY7j`);
	await t.click(loginButton);
	await t.navigateTo(`http://localhost:8080/ui/#default_personal/`);
	const dashboardsTitleElement = Selector(`.pageBreadcrumbs__page-breadcrumbs-item--1GzrN span`);
	await dashboardsTitleElement.visible;
	const dashboard = Selector(`.gridRow__grid-row--1pS-5 a`);
	await dashboard.visible;
	await t.click(dashboard);

	const launch1 = Selector(`.draggable-field`).withText(`LAUNCH STATISTICS AREA`);
	const launch2 = Selector(`.draggable-field`).withText(`LAUNCH STATISTICS BAR`);
	logger.info(`I drag "LAUNCH STATISTICS AREA" to "LAUNCH STATISTICS BAR"`);
	await t.dragToElement(launch1, launch2);
	await t.wait(3000);
});

test(`Verification if element is scrolled into view`, async t => {
	const usernameInput = Selector(`div.inputOutside__input-outside--3DBix.type-text > input`);
	await t.typeText(usernameInput, `sviatlana_tumilevich`);
	const passwordInput = Selector(`div.inputOutside__input-outside--3DBix.inputOutside__type-password--2sIQG > input`);
	await t.typeText(passwordInput, `password`);
	const loginButton = Selector(`.bigButton__big-button--ivY7j`);
	await t.click(loginButton);
	await t.navigateTo(`http://localhost:8080/ui/#default_personal/`);
	const dashboardsTitleElement = Selector(`.pageBreadcrumbs__page-breadcrumbs-item--1GzrN span`);
	await dashboardsTitleElement.visible;
	const dashboard = Selector(`.gridRow__grid-row--1pS-5 a`);
	const last_widget_DEMO_FILTER = Selector(`.react-grid-item:last-child`);
	await t.click(dashboard);

	logger.info(`I scroll to last widget`);
	await t.scrollIntoView(last_widget_DEMO_FILTER);
	await t.expect(last_widget_DEMO_FILTER.visible).ok();
});

test(`Resize widget and verify that selected size is save`, async t => {
	const usernameInput = Selector(`div.inputOutside__input-outside--3DBix.type-text > input`);
	await t.typeText(usernameInput, `sviatlana_tumilevich`);
	const passwordInput = Selector(`div.inputOutside__input-outside--3DBix.inputOutside__type-password--2sIQG > input`);
	await t.typeText(passwordInput, `password`);
	const loginButton = Selector(`.bigButton__big-button--ivY7j`);
	await t.click(loginButton);
	await t.navigateTo(`http://localhost:8080/ui/#sviatlana_tumilevich_personal/dashboard`);
	const dashboardsTitleElement = Selector(`.pageBreadcrumbs__page-breadcrumbs-item--1GzrN span`);
	await dashboardsTitleElement.visible;
	const dashboard = Selector(`.gridRow__grid-row--1pS-5 a`);
	const last_widget_DEMO_FILTER = Selector(`.react-grid-item:last-child`);
	await t.click(dashboard);

	logger.info(`I resize first widget`);
	const resizeWidget = ClientFunction(() => {
		document.querySelector(`.react-resizable:nth-child(1)`).style.width = `830px`;
	});
	const firstWidget = Selector(`.react-resizable:nth-child(1)`);
	const expectedWidgetStyle = await firstWidget.style;
	const expectedWidth = expectedWidgetStyle.width;
	await t.expect(expectedWidth).eql(`930px`);
	await resizeWidget();
	await t.wait(3000);
	const actualWidgetStyle = await firstWidget.style;
	const actualWidth = actualWidgetStyle.width;
	await t.expect(expectedWidth).notEql(actualWidth);
	await t.expect(actualWidth).eql(`830px`);
});

// test(`The other widgets move while resizing`, async t => {
// 	await t.useRole(registeredUser);
// 	await chooseMyPersonalProject;
// 	const dashboard = Selector(`.gridRow__grid-row--1pS-5 a`);
// 	await t.click(dashboard);

// });

// test(`The Content of widget resizes as well`, async t => {
// 	await t.useRole(registeredUser);
// 	await chooseMyPersonalProject;
// 	const dashboard = Selector(`.gridRow__grid-row--1pS-5 a`);
// 	await t.click(dashboard);

// });