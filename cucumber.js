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
		`cucumber-junit-reporter:reports/junit.xml`
	],
	publishQuiet: true,
};

module.exports = common;