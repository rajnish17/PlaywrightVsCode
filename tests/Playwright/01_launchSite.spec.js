const {test, expect} = require ('@playwright/test');

test('Day1Practice', async ({page}) =>
    {
        await page.goto("https://google.com");
        console.log(await page.title());
        await expect(page).toHaveTitle("Google");

    });