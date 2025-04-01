import { test, expect } from '@playwright/test';
import { Search } from '../POM/search';

test.beforeEach(async({ page }) => {
    await page.goto('/');
});

test('Successful search', async({ page }) => {
    const search = new Search(page);

    // Given: a user is on the search bar
    // When: the user searches for an item
    await search.searchForAnItem();

    // Then: the search results should be displayed correctly
    await search.assertSearchIsSuccessful(); 
 });