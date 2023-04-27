const BasePage = require(`./base.page`);

class DashboardsPage extends BasePage {
	constructor(page, url = `/dashboard`) {
		super(page);
		this.url = url;
		this.HeaderFields = `.headerCell__title-short--3_s1A`;
	}
}

module.exports = new DashboardsPage();