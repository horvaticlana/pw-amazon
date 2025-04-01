import { test, expect } from '@playwright/test';
import { Search } from '../POM/search';
import { AddToCart } from '../POM/addToCart';

let addToCart: AddToCart;
let initialCount: number;

test.beforeEach(async ({ page }) => {
    await page.goto('/');

    // Given: Search for an item is successful
    const search = new Search(page);
    await search.searchForAnItem();
    await search.assertSearchIsSuccessful();

    addToCart = new AddToCart(page);

    // Get initial cart count
    initialCount = parseInt(await addToCart.itemsInCart.textContent() || '0');

    // Add a product before each test
    await addToCart.addProductToCart();
});

test('One item successfully added to cart', async () => {
    // Then: Cart should contain one more item
    await addToCart.assertOneProductIsAdded(initialCount + 1);
});
