const {test, expect} = require ('@playwright/test')


test('E2E with Iphone13 pro', async ({browser}) =>
{


    const context = await browser.newContext();
    const page = await context.newPage();

    const products = page.locator(".card-body");


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

    const email = page.locator(".user__name [type='text']").first();
    console.log(email.textContent);
    await expect (email).toHaveText("rajnishdt@gmail.com");
    await page.locator(".field .text-validated").fill(" ");
    await page.locator(".field .text-validated").fill("1234 5678 1234 5678");
    await page.locator(".row .ddl").first().selectOption("07");
    await page.locator(".row .ddl").last().selectOption("31");
    await page.locator("div [class='input txt']").first().fill("123");
    await page.locator("div [class='input txt']").last().fill("Rajneesh");
    await page.locator("div [name='coupon']").fill("rahulshettyacademy");
    await page.locator(".field  .mt-1").first().waitFor();
    await page.locator(".action__submit").click();


    //PAGE4
    await expect (page.locator(".hero-primary")).toBeVisible();
    const orderId= await page.locator ("td tr label.ng-star-inserted").textContent();
    console.log(orderId);
    await expect (orderId).toBeTruthy();
    await page.locator("li [routerlink*='myorders']").click();
    await page.locator(".table-bordered").waitFor();

    const row = await page.locator("tbody tr");
    const rowCount = await row.count();

    for (let i=0; i<rowCount; ++i)
    {

        const rowOrderId = await row.nth(i).locator("th").textContent();
        if(orderId.includes(rowOrderId))
        {
            await row.nth(i).locator("button").first().click();
            break;
        }
    }

    //PAGE5
    const orderIdDetailsFinal = await page.locator("div [class*='col-text']").textContent();
    console.log(orderIdDetailsFinal);
    expect(orderId.includes(orderIdDetailsFinal)).toBeTruthy();
    await page.pause();









    

















});


