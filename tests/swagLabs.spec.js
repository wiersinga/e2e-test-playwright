
import { test, expect} from '@playwright/test'

test('has a title', async ({page}) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveTitle(/Swag Labs/);
})

test('menu clicked', async ({page}) => {
    await page.goto('https://www.saucedemo.com/inventory.html');

})