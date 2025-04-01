import { expect, Locator, Page } from "@playwright/test";

export class Login {
    readonly page: Page;
    readonly signIn: Locator;
    readonly emailField: Locator;
    readonly continueButton: Locator;
    readonly passwordField: Locator;
    readonly signInButton: Locator;
    readonly emailError: Locator;
    readonly passwordError: Locator;
    readonly hello: Locator;
    readonly emptyMailError: Locator;
    readonly emptyPasswordError: Locator;

constructor(page: Page){
    this.page = page;
    this.signIn = page.getByRole('link', { name: 'Hello, sign in Account & Lists' });
    this.emailField = page.getByRole('textbox', { name: 'Email or mobile phone number' });
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.passwordField = page.getByRole('textbox', { name: 'Password' });
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
    this.emailError = page.getByText('We cannot find an account with that email address');
    this.passwordError = page.getByText('Your password is incorrect');   
    this.hello = page.locator('#nav-link-accountList-nav-line-1');
    this.emptyMailError = page.getByText('Enter your email or mobile phone number');
    this.emptyPasswordError = page.getByText('Enter your password');
}

async successfulLogin(validEmail: string, validPass: string) {
    await this.signIn.click();
    await this.emailField.fill(validEmail);
    await this.continueButton.click();
    await this.passwordField.fill(validPass);
    await this.signInButton.click();
}

async assertLoginIsSuccessful(validFirstName : string) {
    await expect(this.hello).toContainText(validFirstName);
}

async emptyEmailField() {
    await this.signIn.click();
    await this.continueButton.click();
}

async assertEmailIsMandatory(){
    await expect(this.emptyMailError).toBeVisible();
}

async invalidEmail(invalidEmail: string) {
    await this.signIn.click();
    await this.emailField.fill(invalidEmail);
    await this.continueButton.click();
}

async assertEmailIsInvalid() {
    await expect(this.emailError).toBeVisible();
}

async invalidPassword(validEmail : string, invalidPass : string){
    await this.signIn.click();
    await this.emailField.fill(validEmail);
    await this.continueButton.click();
    await this.passwordField.fill(invalidPass);
    await this.signInButton.click();
}

async assertPasswordIsInvalid() {
    await expect(this.passwordError).toBeVisible();
}

async emptyPasswordField(validEmail : string) {
    await this.signIn.click();
    await this.emailField.fill(validEmail);
    await this.continueButton.click();
    await this.signInButton.click();
}

async assertPassIsMandatory() {
    await expect(this.emptyPasswordError).toBeVisible();
}

}