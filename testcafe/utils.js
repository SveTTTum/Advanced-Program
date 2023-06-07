const { Role, Selector } = require(`testcafe`);
const loginUrl = `http://localhost:8080`;

const registeredUser = Role(loginUrl, async t => {
	const usernameInput = Selector(`div.inputOutside__input-outside--3DBix.type-text > input`);
	await usernameInput.visible;
	await t.typeText(usernameInput, `sviatlana_tumilevich`);
	const passwordInput = Selector(`div.inputOutside__input-outside--3DBix.inputOutside__type-password--2sIQG > input`);
	await passwordInput.visible;
	await t.typeText(passwordInput, `password`);
	const loginButton = Selector(`.bigButton__big-button--ivY7j`);
	await t.click(loginButton);
});

const openDefaultProject = async t => {
	await t.navigateTo(`http://localhost:8080/ui/#default_personal/`);
	const dashboardsTitleElement = Selector(`.pageBreadcrumbs__page-breadcrumbs-item--1GzrN span`);
	await dashboardsTitleElement.visible;
};

module.exports = { registeredUser, openDefaultProject };