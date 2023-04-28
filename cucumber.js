const common = {
	paths: [
		`features/*.feature`,
	],
	require: [
		`step-definitions/*.js`
	],
	format: [
		`json:reports/cucumber_report.json`,
		`@qavajs/html-formatter:./reports/report.html`,
		`xray-formatter:reports/xray.json`,
		`junit:reports/junit.xml`
	],
	publishQuiet: true,
	formatOptions: {
		jiraOptions: {
			regexp: /(PC-\d+)/,
			report: `./reports/xray.json`
		}
	}
};

module.exports = {
	default: common
};