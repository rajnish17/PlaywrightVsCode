const {test, expect} = require ('@playwright/test')


test('E2E practice Page1', async ({browser}) =>
{


    const context = await browser.newContext();
    const page = await context.newPage();
    const products = await page.locator(".card-body");
    const productName = 'ZARA COAT 3';
    const email = await page.locator(".user__name [type='text']").first();



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

    expect (email).toHaveText("rajnishdt@gmail.com");
    await page.locator(".field .text-validated").fill(" ");
    await page.locator(".field .text-validated").fill("1234 5678 1234 5678");
    const expiryMonth = await page.locator("div [class*=ddl]").first();
    await expiryMonth.selectOption("07");
    const expiryYear = await page.locator("div [class*=ddl]").last();
    await expiryYear.selectOption("20");
    await page.locator("div [class='input txt']").nth(0).fill("123");
    await page.locator("div [class='input txt']").nth(1).fill("Rajneesh");
    await page.locator("div [name='coupon']").fill("rahulshettyacademy");
    await page.locator("div [type='submit']").click();
    await page.locator("text= * Coupon Applied").waitFor();
    await page.locator(".action__submit").click();


    //PAGE4
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
    await page.locator(".em-spacer-1 [routerlink*='myorders']").click();
    await page.locator(".table-bordered").waitFor();
    
    const table = await page.locator("tbody tr");
    const tableCount = await table.count();

    for (let i=0; i<tableCount; ++i)
    {
        const rowOrderId = await table.nth(i).locator("th").textContent()
        if (orderId.includes(rowOrderId))
        {
            await table.nth(i).locator("button").first().click();
            break;
        }
    }

    //PAGE 5
    const orderIdDetails = await page.locator(".col-text").first().textContent();
    console.log(orderIdDetails);
    expect(orderId.includes(orderIdDetails)).toBeTruthy();
    await page.pause();




    
    






    


})