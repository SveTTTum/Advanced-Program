const BasePage = require(`./base.page`);

class HomePage extends BasePage {
	constructor(page, url = `/ui/`) {
		super(page);
		this.url = url;
		this.UserBlock = `.userBlock__avatar-wrapper--_Jkks`;
		this.ProjectsButton = `.sidebar__main-block--3Agjk`;
		this.HeaderFields = `.headerCell__title-short--3_s1A`;
	}
}

module.exports = new HomePage();