// @ts-check
const { defineConfig, devices } = require(`@playwright/test`);
// const RPconfig = require(`./rp.config`);

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
	testDir: `./tests`,
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,
	/* Retry on CI only */
	retries: process.env.CI ? 2 : 1,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 4 : 2,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: [
		[`html`, { open: `never`, outputFolder: `reports/playwright-report` }],
		// [`@reportportal/agent-js-playwright`, RPconfig],
	],
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Base URL to use in actions like `await page.goto('/')`. */
		baseURL: `http://localhost:8080/`,

		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: `on-first-retry`,
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: `chromium`,
			use: { ...devices[`Desktop Chrome`], headless: true, viewport: { width: 1280, height: 720, },},
		},

		// {
		// 	name: `firefox`,
		// 	use: { ...devices[`Desktop Firefox`] },
		// },
	],
});

