const {test} = require ('@playwright/test');

test('Assignment 1', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto("https://saucedemo.com/");
    await page.locator("[id='user-name']").fill("standard_user");
    await page.locator("[name = 'password']").fill("secret_sauce");
    await page.locator("[type='submit']").click();
    console.log (await page.title());

})
