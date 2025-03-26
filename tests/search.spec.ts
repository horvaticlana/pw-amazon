import { test, expect } from '@playwright/test';
import { Search } from '../POM/search';

test.beforeEach(async({ page }) => {
    await page.goto('/');
});

test('Successful search', async({ page }) => {
    const search = new Search(page);
    
    await search.successfulSearch();
    await search.assertSearchIsSuccessful(); 
 });