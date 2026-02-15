const {test} = require ('@playwright/test');



test('Client App', async ({browser}) =>
{

    const context = await browser.newContext();
    const page = await context.newPage();
    const productName = 'ZARA COAT 3';
    const products = await page.locator(".card-body");



    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("rajnishdt@gmail.com");
    await page.locator("[type='password']").fill("Playwright@123");
    await page.locator("input.login-btn").click();
    await page.waitForLoadState("networkidle");
    await page.locator(".card-body").first().waitFor();


    const title = await page.locator(".card-body b").allTextContents();
    console.log(title);

    const count = await products.count();
    
    for (let i=0; i<count; ++i)
    {
       if (await products.nth(i).locator("b").textContent() === productName)
       {
        // add to cart
    
        await products.nth(i).locator("text= Add To Cart").click();
        break;

       }
    }
    await page.pause();

})