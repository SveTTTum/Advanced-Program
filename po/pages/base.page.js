class BasePage {
	constructor(page) {
		this.page = page;
		this.baseUrl = `http://localhost:8080`;
	}

	async waitFor(element) {
		await page.waitForSelector(element);
	}

	async pause(sec) {
		await page.waitForTimeout(sec);
	}
}

module.exports = BasePage;
