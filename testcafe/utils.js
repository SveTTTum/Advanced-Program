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
	const sl = Selector(`.projectSelector__project-selector--FXbsR.projectSelector__shown--YcXp5`);
	await sl.visible;
	await t.click(sl);
	const projectElement = Selector(`.sidebar__sidebar--1J7aD a[href="#default_personal"] span`);
	await projectElement.visible;
	await t.click(projectElement);
	const dashboardsTitleElement = Selector(`.pageBreadcrumbs__page-breadcrumbs-item--1GzrN span`);
	dashboardsTitleElement.visible;
};

module.exports = { registeredUser, openDefaultProject };