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

    async validateScreenElements(): Promise<void> {
        await expect(this.page.locator(OrangeHRMLocators.companyLogo)).toBeVisible();
        await expect(this.page.locator(OrangeHRMLocators.textLogin)).toBeVisible();
        await expect(this.page.locator(OrangeHRMLocators.textLogin)).toHaveText(orangeHrmPageConstants.TEXT_LOGIN);
        await expect(this.page.locator(OrangeHRMLocators.orangeLogo)).toBeVisible();
        await expect(this.page.locator(OrangeHRMLocators.labelUsername)).toBeVisible();
        await expect(this.page.locator(OrangeHRMLocators.labelUsername)).toHaveText(orangeHrmPageConstants.USERNAME);
        await expect(this.page.locator(OrangeHRMLocators.labelPassword)).toBeVisible();
        await expect(this.page.locator(OrangeHRMLocators.labelPassword)).toHaveText(orangeHrmPageConstants.PASSWORD);
        await expect(this.page.locator(OrangeHRMLocators.linkForgotPassword)).toBeVisible();
        await expect(this.page.locator(OrangeHRMLocators.linkForgotPassword)).toHaveText(orangeHrmPageConstants.FORGOT_PASSOWRD);
        await expect(this.page.locator(OrangeHRMLocators.copyright1).nth(0)).toBeVisible();
        await expect(this.page.locator(OrangeHRMLocators.copyright1).nth(0)).toHaveText(orangeHrmPageConstants.COPYRIGHT_ONE);
        await expect(this.page.locator(OrangeHRMLocators.copyright1).nth(1)).toBeVisible();
        await expect(this.page.locator(OrangeHRMLocators.copyright1).nth(1)).toHaveText(orangeHrmPageConstants.COPYRIGHT_TWO);
        await expect(this.page.locator(OrangeHRMLocators.copyrightLink)).toHaveAttribute('href', OrangeHRMUrls.orangeHRMInc);
    }
}