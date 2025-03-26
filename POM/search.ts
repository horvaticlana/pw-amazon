import { expect, Locator, Page } from "@playwright/test";

export class Search {
    readonly page: Page;
    searchInput : Locator;
    searchBtn : Locator;
    searchResults : Locator;

    constructor(page: Page){
        this.page = page;
        this.searchInput = page.getByRole('searchbox', { name: 'Search Amazon' });
        this.searchBtn = page.getByRole('button', { name: 'Go', exact: true });
        this.searchResults = page.getByRole('heading', { name: 'Results', exact: true });
    }

    //successful search

    async successfulSearch(){
        await this.searchInput.click();
        await this.searchInput.fill('vacuum cleaner');
        await this.searchBtn.click();
    }

    async assertSearchIsSuccessful(){
        await expect(this.searchResults).toBeVisible();
    }
}