import { test } from '@playwright/test';
import { OrangeHRM } from '../support/domain/orangehrm';
import { orangehrmData } from '../fixtures/data.registry';

let orangePage: OrangeHRM;

test.beforeEach(async ({ page }) => {
  orangePage = new OrangeHRM(page);
  await orangePage.launchApplication();
});

for (const data of orangehrmData) {
  test(`validate different Login Flow - with username ${data.username} and password ${data.password}`, async () => {
    await orangePage.login(data.username, data.password);
    if (data.expectedResult === 'success') {
      await orangePage.verifyLoginSuccess();
    } else {
      await orangePage.verifyLoginFailure();
    }
  });
}


test('Validate orangeHrm LoginScreen', async () => {
  await orangePage.validateScreenElements();
  await orangePage.login(orangehrmData[0].username, orangehrmData[0].password);
  await orangePage.verifyLoginSuccess();
});