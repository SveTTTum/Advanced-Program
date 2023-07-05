const createTestCafe = require(`testcafe`);
let testcafe = null;
const logger = require(`./support/logger`);

createTestCafe(`localhost`, 1337, 1338)
	.then(tc => {
		testcafe = tc;
		const runner = testcafe.createRunner();

		return runner
			.src([`testcafe/test-vl.js`])
			.browsers(`chrome:headless`)
			.concurrency(1)
			.screenshots(`./reports/screenshots/`, true)
			.reporter(`minimal`)
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
		logger.info(`tests failed: ` + failedCount);
		testcafe.close();
	});