import { test, expect } from '@playwright/test';
import { Login } from '../POM/login';
import { LoginEnv } from '../env/loginEnv';

test.beforeEach(async({ page }) => {
    await page.goto('/');
});

test('Successful login', async({ page }) => {
    const login = new Login(page);
    const loginEnv = new LoginEnv(page);
    
    await login.successfulLogin(loginEnv.validEmail, loginEnv.validPass);
    await login.assertLoginIsSuccessful(); 
 });

test('Invalid e-mail', async({ page }) => {
    const login = new Login(page);
    const loginEnv = new LoginEnv(page);

    await login.invalidEmail(loginEnv.invalidEmail);
    await login.assertEmailIsInvalid();
});

test('Invalid password', async({ page }) => {
    const login = new Login(page);
    const loginEnv = new LoginEnv(page);

    await login.invalidPass(loginEnv.validEmail, loginEnv.invalidPass);
    await login.assertPassIsInvalid();
});

test('Empty e-mail field', async({ page })=> {
    const login = new Login(page);
    const loginEnv = new LoginEnv(page);

    await login.emptyEmailField();
    await login.assertEmailIsMandatory();
});

test('Empty pass field', async ({ page }) => {
    const login = new Login(page);
    const loginEnv = new LoginEnv(page);

    await login.emptyPassField(loginEnv.validEmail);
    await login.assertPassIsMandatory();
});