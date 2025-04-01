import { test, expect } from '@playwright/test';
import { Search } from '../POM/search';
import { AddToCart } from '../POM/addToCart';
import { CartPage } from '../POM/cartPage';

let addToCart: AddToCart;
let cartPage: CartPage;
let initialCount: number;

test.beforeEach(async ({ page }) => {
    await page.route('**/*amazon-adsystem.com/**', route => route.abort());
    await page.goto('/');

    const search = new Search(page);
    await search.searchForAnItem();
    await search.assertSearchIsSuccessful();
    
    addToCart = new AddToCart(page);
    cartPage = new CartPage(page);

    // Add a product to the cart before modifying it
    await addToCart.addProductToCart();

    // Navigate to the cart page
    await cartPage.goToCart();

    // Get initial cart count
    initialCount = parseInt(await cartPage.itemsInCart.textContent() || '0');
});

test('Quantity of items in cart is increased', async () => {
    // When: The quantity is increased
    await cartPage.increaseQuantity();

    // Then: The cart count should increase
    await cartPage.assertQuantityIsIncreased(initialCount + 1);
});

test('Quantity of items in cart is decreased', async () => {
    // When: The quantity is decreased
    await cartPage.decreaseQuantity();

    // Then: The cart count should decrease
    await cartPage.assertQuantityIsDecreased(initialCount - 1);
});
