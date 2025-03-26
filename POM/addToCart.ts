import { expect, Locator, Page } from "@playwright/test";

export class AddToCart {
    readonly page : Page;
    addToCartBtn : Locator;
    increaseBtn : Locator;
    decreaseBtn : Locator;
    itemsInCart : Locator;
    subtotal : Locator;

    constructor(page: Page){
        this.page = page;
        this.addToCartBtn = page.locator('#a-autoid-1-announce');
        this.increaseBtn = page.getByRole('button', { name: 'Increase quantity by one' });
        this.decreaseBtn = page.getByRole('button', { name: 'Decrease quantity by one' });
        this.itemsInCart = page.getByRole('link', { name: 'items in cart' });
        this.subtotal = page.getByRole('heading', { name: 'Subtotal' });
    }

    // add item to cart
    async addProductToCart() {
        await this.addToCartBtn.click();
    }

    async assertOneProductIsAdded(){
        await expect(this.itemsInCart).toHaveCount(1);
    }

    // increase product quantity by one
        // UI is not giving the increaseBtn for some reason, had to use the addToCartBtn
    async increaseQuantity() {
        await this.addToCartBtn.click();
    }

    async assertQuantityIsIncreased(){
        const initialCount = await this.itemsInCart.count();
        await this.increaseQuantity();
        await expect(this.itemsInCart).toHaveCount(initialCount + 1);
    }

    // decrease product quantity by one
    async decreaseQuantity() {
        await this.decreaseBtn.click();
    }

    async assertQuantityIsDecreased(){
        const initialCount = await this.itemsInCart.count();
        await this.decreaseQuantity();
        await expect(this.itemsInCart).toHaveCount(initialCount - 1);
    }

    //get subtotal
    async getSubtotal() {
        await this.addProductToCart();
        await this.subtotal.textContent();
    }

    async assertSubtotalExists(){
        await expect(this.subtotal).toBeVisible();
    }

} 