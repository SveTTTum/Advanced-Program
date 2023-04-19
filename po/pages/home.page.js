const BasePage = require(`./base.page`);

class HomePage extends BasePage {
	constructor(page, url = `ui/#administrate/projects`) {
		super(page);
		this.url = url;
		this.UserBlock = `.userBlock__avatar-wrapper--_Jkks`;
	}
}

module.exports = new HomePage();