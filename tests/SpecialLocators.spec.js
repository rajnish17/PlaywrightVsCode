const {test} = require ('@playwright/test');

test('Playwright special locators', async ({browser}) =>
{

    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByLabel("Employed").check();
    await page.getByPlaceholder("Password").fill("123");
    await page.getByRole("button", {name : 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link", {name : 'Shop'}).click();
    await page.locator("app-card").filter({hasText : 'iphone X'}).getByRole("button", {name : 'Add'}).click();


})

