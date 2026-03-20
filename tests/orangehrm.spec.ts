import { test } from '@playwright/test';
import { OrangeHRM } from '../support/domain/orangehrm';

let orangePage: OrangeHRM;

test.beforeEach(async ({ page }) => {
    orangePage = new OrangeHRM(page);
    await orangePage.launchApplication();
});

test('Login to OrangeHRM', async ({ page }) => {
    await orangePage.login('Admin', 'admin123');
    await orangePage.verifyLoginSuccess();
});

test('Invalid Login to OrangeHRM', async ({ page }) => {
    await orangePage.login('Admin', 'admin1');
    await orangePage.verifyLoginFailure();
});