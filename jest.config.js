/* eslint-disable linebreak-style */
/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
	displayName: {
		name: `JEST`,
		color: `magenta`,
	},

	clearMocks: true,

	// A list of reporter names that Jest uses when writing coverage reports
	coverageReporters: [
		`clover`,
		`json`,
		`lcov`,
		`['text', {skipFull: true}]`
	],

	// The root directory that Jest should scan for tests and modules within
	rootDir: `./tests.jest`,

	// The number of seconds after which a test is considered as slow and reported as such in the results.
	slowTestThreshold: 5,

	// The glob patterns Jest uses to detect test files
	testMatch: [
		`tests.jest/**/*.[jt]s?(x)`,
		`**/?(*.)+(spec|test).[tj]s?(x)`
	],

	// An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
	testPathIgnorePatterns: [
		`\\\\node_modules\\\\`
	],

	preset: `jest-playwright-preset`,
};
