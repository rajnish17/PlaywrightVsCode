const {test, expect} = require ('@playwright/test')


test('E2E with Iphone13 pro', async ({browser}) =>
{


    const context = await browser.newContext();
    const page = await context.newPage();

    const products = await page.locator(".card-body");


    //PAGE1
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("rajnishdt@gmail.com");
    await page.locator("[type='password']").fill("Playwright@123");
    await page.locator("[name='login']").click();
    await page.waitForLoadState("networkidle");
    await products.first().waitFor();

    const title = await page.locator(".card-body b").allTextContents();
    console.log(title);

    const count = await page.locator(".card-body").count();

    for (let i=0; i<count; ++i)
    {

        if (await products.nth(i).locator("b").textContent() === 'iphone 13 pro')
        {
            await products.nth(i).locator('text = Add To Cart').click();
            break;
        }
    }


    //PAGE2
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('iphone 13 pro')").isVisible();
    await expect(bool).toBeTruthy();
    console.log(bool);

    //PAGE3
    await page.locator("text = Checkout").click();
    await page.locator("[placeholder*='Country']").pressSequentially("ind");
    await page.locator(".ta-results").first().waitFor();
    const dropdown = await page.locator("[type='button']");
    const optionscount = await dropdown.count();
    console.log(optionscount);

    for (let i=0; i<optionscount; ++i)
    {
        
        if (await page.locator("[type='button']").nth(i).textContent() ===  ' India')
        {

            await page.locator("[type='button']").nth(i).click();
            break;
            
        }

    }
    await page.pause();











});


