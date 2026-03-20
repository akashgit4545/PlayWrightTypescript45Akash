export interface OrangeHRMInterface {
    launchApplication(): Promise<void>;
    login(username: string, password: string): Promise<void>;
    verifyLoginSuccess(): Promise<void>;
    verifyLoginFailure(): Promise<void>;
}

export const OrangeHRMLocators = {
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    loginButton: 'button[type="submit"]',
    errorMessage: 'text=Invalid credentials',
}

export enum OrangeHRMUrls {
    loginPage = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    dashboardPage = 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
}