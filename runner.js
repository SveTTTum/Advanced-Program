const createTestCafe = require(`testcafe`);
let testcafe = null;

createTestCafe(`localhost`, 1337, 1338)
	.then(tc => {
		testcafe = tc;
		const runner = testcafe.createRunner();

		return runner
			.src([`testcafe/test.js`])
			.browsers([`chrome`])
			.concurrency(1)
			.screenshots(`./reports/screenshots/`, true)
			.reporter(`spec`)
			.run(
				{
					qurantineMode: false,
					skipJsErrors: true,
					skipUncaughtErrors: true,
					selectorTimeout: 10000,
					assertionTimeout: 10000,
					pageLoadTimeout: 20000
				}
			);
	})
	.then(failedCount => {
		console.log(`tests failed: ` + failedCount);
		testcafe.close();
	});