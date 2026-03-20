import { expect, Page } from "@playwright/test";
import { OrangeHRMInterface, OrangeHRMLocators, OrangeHRMUrls, orangeHrmPageConstants } from "../interface/orangehrm-interface";

export class OrangeHRM implements OrangeHRMInterface {
    constructor(private page: Page) { }
    async launchApplication(): Promise<void> {
        await this.page.goto(OrangeHRMUrls.loginPage);
    }

    async login(username: string, password: string): Promise<void> {
        await this.page.locator(OrangeHRMLocators.usernameInput).fill(username);
        await this.page.locator(OrangeHRMLocators.passwordInput).fill(password);
        await this.page.locator(OrangeHRMLocators.loginButton).click();
    }

    async verifyLoginSuccess(): Promise<void> {
        await expect(this.page).toHaveURL(OrangeHRMUrls.dashboardPage, { timeout: 10000 });
        console.log('Login successful, dashboard page loaded.');
    }

    async verifyLoginFailure(): Promise<void> {
        await expect(this.page.locator(OrangeHRMLocators.errorMessage)).toBeVisible({ timeout: 10000 });
        await expect(this.page.locator(OrangeHRMLocators.errorMessage)).toHaveText(orangeHrmPageConstants.ERROR_MESSAGE);
    }
}