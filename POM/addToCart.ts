import { expect, Locator, Page } from "@playwright/test";

export class AddToCart {
    readonly page: Page;
    addToCartButton: Locator;
    itemsInCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = page.locator('#a-autoid-1-announce'); 
        this.itemsInCart = page.locator('#nav-cart-count'); 
    }

    async addProductToCart() {
        await this.addToCartButton.click();
    }

    async assertOneProductIsAdded(expectedCount: number) {
        await expect(this.itemsInCart).toHaveText(expectedCount.toString());
    }
}
