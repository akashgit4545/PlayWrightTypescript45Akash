export interface OrangeHRMInterface {
    launchApplication(): Promise<void>;
    login(username: string, password: string): Promise<void>;
    verifyLoginSuccess(): Promise<void>;
    verifyLoginFailure(): Promise<void>;
    validateScreenElements(): Promise<void>;
}

export const OrangeHRMLocators = {
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    loginButton: 'button[type="submit"]',
    errorMessage: 'text=Invalid credentials',
    companyLogo: 'img[alt="company-branding"]',
    textLogin: 'h5:has-text("Login")',
    labelUsername: 'label:has-text("Username")',
    labelPassword: 'label:has-text("Password")',
    linkForgotPassword: 'text=Forgot your password?',
    orangeLogo: 'div.orangehrm-login-logo',
    copyright1: 'p.orangehrm-copyright',
    copyrightLink: 'p.orangehrm-copyright a',

}

export enum OrangeHRMUrls {
    loginPage = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    dashboardPage = 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
    orangeHRMInc = 'http://www.orangehrm.com'
}

export enum orangeHrmPageConstants {
    ERROR_MESSAGE = 'Invalid credentials',
    TEXT_LOGIN = 'Login',
    USERNAME = 'Username',
    PASSWORD = 'Password',
    FORGOT_PASSOWRD = 'Forgot your password? ',
    COPYRIGHT_ONE = 'OrangeHRM OS 5.8',
    COPYRIGHT_TWO = '© 2005 - 2026 OrangeHRM, Inc. All rights reserved.'
}   