class BasePage {
  constructor() {
  } 

  async waitFor(element) {
    await page.waitForSelector(element);
  }

  async pause(sec) {
    await page.waitForTimeout(sec)
  }
}

module.exports = BasePage;
