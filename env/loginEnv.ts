import { Page } from "@playwright/test";

export class LoginEnv {
    page: Page;
    validEmail: string;
    validPass: string;
    validFirstName: string;
    invalidEmail: string;
    invalidPass: string;

    constructor(page: Page){
        this.page = page;
        this.validEmail = 'lanahorvatic95@gmail.com';
        this.validPass = 'Pavijanka123.';
        this.validFirstName = 'Lana';
        this.invalidEmail = 'invalid@mail.hr';
        this.invalidPass = 'pass';
    }
}