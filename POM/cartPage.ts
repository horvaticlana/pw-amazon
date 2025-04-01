import { expect, Locator, Page } from "@playwright/test";

export class CartPage {
    readonly page: Page;
    cartButton: Locator;
    increaseButton: Locator;
    decreaseButton: Locator;
    itemsInCart: Locator;
    subtotal: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartButton = page.locator('#nav-cart'); // Navigate to Cart
        this.increaseButton = page.getByRole('button', { name: 'Increase quantity by one' });
        this.decreaseButton = page.getByRole('button', { name: 'Decrease quantity by one' });
        this.itemsInCart = page.locator('#nav-cart-count'); // Cart item count
        this.subtotal = page.getByRole('heading', { name: 'Subtotal' });
    }

    async goToCart() {
        await this.cartButton.click();
    }

    async increaseQuantity() {
        await this.cartButton.click();
        await this.increaseButton.waitFor({ state: 'visible' });
        await this.increaseButton.click();
    }

    async assertQuantityIsIncreased(expectedCount: number) {
        await expect(this.itemsInCart).toHaveText(expectedCount.toString());
    }

    async decreaseQuantity() {
        await this.decreaseButton.waitFor({ state: 'visible' });
        await this.decreaseButton.click();
    }

    async assertQuantityIsDecreased(expectedCount: number) {
        await expect(this.itemsInCart).toHaveText(expectedCount.toString());
    }
}
