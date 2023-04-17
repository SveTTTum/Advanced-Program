// const common = `
// 	-f json:reports/cucumber_report.json,
// 	-f @qavajs/html-formatter:./reports/report.html,
// 	-f xray-formatter:reports/xray.json,
// 	--publish-quiet
// `
// module.exports = {
//   default: `${common} features/*.feature`,
// }

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
}

module.exports = {
	default: '--publish-quiet',
	common,
	ci: {
		...common,
		formatOptions: {
			rpConfig: {
				token: `bf09c1c3-ada2-4574-a97f-2bc41e0e38e3`,
				endpoint: `https://reportportal.epam.com/api/v1`,
				description: `Advanced Program`,
				launch: `Playwright tests`,
				project: `advanced-program`
			},
		},
	}
};