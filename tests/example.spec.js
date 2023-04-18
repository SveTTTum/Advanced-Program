const { test, expect } = require('@playwright/test');
const logger = require('../support/logger');
const url = 'http://localhost:8080/';

test('has title', async ({ page }) => {
  await page.goto(url);
  logger.info(`Page title should be "Report Portal"`);
  await expect(page).toHaveTitle(/Report Portal/);
});

test('log in', async ({ page }) => {
  await page.goto(url);

  await page.locator('div.inputOutside__input-outside--3DBix.type-text > input').fill(`superadmin`);
  await page.locator('div.inputOutside__input-outside--3DBix.inputOutside__type-password--2sIQG > input').fill(`erebus`);
  await page.locator('.bigButton__big-button--ivY7j').click();

  const userBlock = page.locator('.userBlock__avatar-wrapper--_Jkks');
  logger.info(`I am logged in`);
  await expect(userBlock).toBeVisible();
});
