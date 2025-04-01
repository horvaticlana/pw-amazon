import { test, expect } from '@playwright/test';
import { Login } from '../POM/login';
import { LoginEnv } from '../env/loginEnv';

test.beforeEach(async({ page }) => {
    await page.goto('/');
});

test('Successful login', async({ page }) => {
    
    // Given: the user has valid credentials
    const login = new Login(page);
    const loginEnv = new LoginEnv(page);
    
    // When: the user attempts to log in with valid credentials
    await login.successfulLogin(loginEnv.validEmail, loginEnv.validPass);

    // Then: the login should be successful
    await login.assertLoginIsSuccessful(loginEnv.validFirstName); 
 });

test('Invalid e-mail', async({ page }) => {

    // Given: the user has an invalid email
    const login = new Login(page);
    const loginEnv = new LoginEnv(page);

    // When: the user attempts to log in
    await login.invalidEmail(loginEnv.invalidEmail);

    // Then: an error message should indicate the email is invalid
    await login.assertEmailIsInvalid();
});

test('Invalid password', async({ page }) => {
    
    // Given: the user has a valid email but an invalid password
    const login = new Login(page);
    const loginEnv = new LoginEnv(page);

    // When: the user attempts to log in

    await login.invalidPassword(loginEnv.validEmail, loginEnv.invalidPass);

    // Then: an error message should indicate the password is incorrect
    await login.assertPasswordIsInvalid();
});

test('Empty e-mail field', async({ page })=> {
    
    // Given: user leaves the email field empty
    const login = new Login(page);
    const loginEnv = new LoginEnv(page);

    // When: the user attempts to log in
    await login.emptyEmailField();

    // Then: an error message should indicate the email field is required
    await login.assertEmailIsMandatory();
});

test('Empty pass field', async ({ page }) => {
    
    // Given: a user enters a valid email but leaves the password field empty 
    const login = new Login(page);
    const loginEnv = new LoginEnv(page);

    // When: the user attempts to log in
    await login.emptyPasswordField(loginEnv.validEmail);

    // Then: an error message should indicate the password field is required
    await login.assertPassIsMandatory();
});