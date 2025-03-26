import { expect, Locator, Page } from "@playwright/test";

export class Login {
    readonly page: Page;
    readonly signIn: Locator;
    readonly emailField: Locator;
    readonly continueBtn: Locator;
    readonly passField: Locator;
    readonly signInBtn: Locator;
    readonly emailError: Locator;
    readonly passError: Locator;
    readonly hello: Locator;
    readonly emptyMailError: Locator;
    readonly emptyPassError: Locator;

constructor(page: Page){
    this.page = page;
    this.signIn = page.getByRole('link', { name: 'Hello, sign in Account & Lists' });
    this.emailField = page.getByRole('textbox', { name: 'Email or mobile phone number' });
    this.continueBtn = page.getByRole('button', { name: 'Continue' });
    this.passField = page.getByRole('textbox', { name: 'Password' });
    this.signInBtn = page.getByRole('button', { name: 'Sign in' });
    this.emailError = page.getByText('We cannot find an account with that email address');
    this.passError = page.getByText('Your password is incorrect');   
    this.hello = page.getByText('Hello, Lana');
    this.emptyMailError = page.getByText('Enter your email or mobile phone number');
    this.emptyPassError = page.getByText('Enter your password');
}

//sucessful login
async successfulLogin(validEmail: string, validPass: string) {
    await this.signIn.click();
    await this.emailField.fill(validEmail);
    await this.continueBtn.click();
    await this.passField.fill(validPass);
    await this.signInBtn.click();
}

async assertLoginIsSuccessful() {
    await expect(this.hello).toBeVisible();
}

//empty email field

async emptyEmailField() {
    await this.signIn.click();
    await this.continueBtn.click();
}

async assertEmailIsMandatory(){
    await expect(this.emptyMailError).toBeVisible();
}

//invalid email
async invalidEmail(invalidEmail: string) {
    await this.signIn.click();
    await this.emailField.fill(invalidEmail);
    await this.continueBtn.click();
}

async assertEmailIsInvalid() {
    await expect(this.emailError).toBeVisible();
}

//invalid pass

async invalidPass(validEmail : string, invalidPass : string){
    await this.signIn.click();
    await this.emailField.fill(validEmail);
    await this.continueBtn.click();
    await this.passField.fill(invalidPass);
    await this.signInBtn.click();
}

async assertPassIsInvalid() {
    await expect(this.passError).toBeVisible();
}

//empty pass field

async emptyPassField(validEmail : string) {
    await this.signIn.click();
    await this.emailField.fill(validEmail);
    await this.continueBtn.click();
    await this.signInBtn.click();
}

async assertPassIsMandatory() {
    await expect(this.emptyPassError).toBeVisible();
}

}