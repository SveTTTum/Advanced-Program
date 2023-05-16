const BasePage = require(`./base.page`);

class LoginPage extends BasePage {
	constructor(page, url = `/ui/#login`) {
		super(page);
		this.url = url;
		this.UsernameInput = `div.inputOutside__input-outside--3DBix.type-text > input`;
		this.PasswordInput = `div.inputOutside__input-outside--3DBix.inputOutside__type-password--2sIQG > input`;
		this.LoginButton = `.bigButton__big-button--ivY7j`;
		this.Title = `title`;
	}

	async submitLoginWithParameters(username, password) {
		// Login with given credentials (Username and Password are coming from Feature file)
		await page.fill(`div.inputOutside__input-outside--3DBix.type-text > input`, username);
		await page.fill(`div.inputOutside__input-outside--3DBix.inputOutside__type-password--2sIQG > input`, password);
		await page.click(`.bigButton__big-button--ivY7j`);
	}

}

module.exports = new LoginPage();