const BasePage = require(`./base.page`);

class DashboardsPage extends BasePage {
	constructor(page, url = `/dashboard`) {
		super(page);
		this.url = url;
		this.HeaderFields = `.headerCell__title-short--3_s1A`;
		this.DemoDashboard = `.dashboardTable__name--1sWJs`;
		this.HeaderButtons = `.ghostButton__text--eUa9T`;
		this.Widgets = `.widgetHeader__widget-name-block--7fZoV`;
	}
}

module.exports = new DashboardsPage();