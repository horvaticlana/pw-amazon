import { test, expect } from '@playwright/test';
import { Search } from '../POM/search';
import { AddToCart } from '../POM/addToCart';

test.beforeEach(async({ page }) => {
    await page.goto('/');
});

test('One item successfully added to cart', async({ page }) => {
    const search = new Search(page);
    const addToCart = new AddToCart(page);
    await search.successfulSearch();
    await search.assertSearchIsSuccessful(); 

    await addToCart.addProductToCart();
    await addToCart.assertOneProductIsAdded();
});

test('Quantity of items in cart is increased', async({ page }) => {
    const search = new Search(page);
    const addToCart = new AddToCart(page);

    await search.successfulSearch();
    await addToCart.addProductToCart();

    await addToCart.increaseQuantity();
    await addToCart.assertQuantityIsIncreased();
});

test('Quantity of items in cart is decreased', async({ page }) => {
    const search = new Search(page);
    const addToCart = new AddToCart(page);

    await search.successfulSearch();
    await addToCart.addProductToCart();
    await addToCart.increaseQuantity();

    await addToCart.decreaseQuantity();
    await addToCart.assertQuantityIsDecreased();
});