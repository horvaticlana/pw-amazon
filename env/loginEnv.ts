import { Page } from "@playwright/test";

export class LoginEnv {
    page: Page;
    baseUrl: string;
    validEmail: string;
    validPass: string;
    invalidEmail: string;
    invalidPass: string;
    static baseUrl: string;

    constructor(page: Page){
        this.page = page;
        this.baseUrl = 'https://www.amazon.com/';
        this.validEmail = 'lanahorvatic95@gmail.com';
        this.validPass = 'Pavijanka123.';
        this.invalidEmail = 'invalid@mail.hr';
        this.invalidPass = 'pass';
    }
}