const {test, expect} = require ('@playwright/test')


test.only('E2E practice Page1', async ({browser}) =>
{


    const context = await browser.newContext();
    const page = await context.newPage();
    const products = await page.locator(".card-body");
    const productName = 'ZARA COAT 3';


    //PAGE 1
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("rajnishdt@gmail.com");
    await page.locator("[type='password']").fill("Playwright@123");
    await page.locator("#login").click();
    await page.waitForLoadState("networkidle");
    await page.locator(".card-body").first().waitFor();


    const title = await page.locator(".card-body b").allTextContents();
    console.log(title);

    const count = await products.count();

    for (let i=0; i<count; ++i)
    {
       if (await products.nth(i).locator("b").textContent() === productName)
       {

        await products.nth(i).locator("text = Add To Cart").click();
        break;

       }
    }

    //PAGE2
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();    

    //PAGE3
    await page.locator("text = Checkout").click();
    await page.locator("input[placeholder='Select Country']").pressSequentially("ind");
    await page.locator(".ta-results").first();
    
    const optionsCount = page.locator("button").count();

    for ( let i=0; i<optionsCount; ++i)
    {

        const text = await page.locator("button").nth(i).textContent();
        if (text == India)
        {
            await page.locator("button").nth(i).click();
            break;
        }

    }
    await page.pause();

})