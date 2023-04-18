const rpConfig = require(`./rp.config.json`);

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
	],
	publishQuiet: true,
};

module.exports = {
	default: `--publish-quiet`,
	common,
	ci: {
		...common,
		formatOptions: {
			rpConfig: rpConfig
		},
	}
};