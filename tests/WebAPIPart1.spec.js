const {test, expect, request } = require ('@playwright/test')

const loginPayload = {userEmail: "rajnishdt@gmail.com", userPassword: "Playwright@123"}
let token;

test.beforeAll(async ()=> 
{

    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
    {
        data : loginPayload
    })
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    token = await loginResponseJson.token;

});

test.only('WebAPIPart1', async ({browser}) =>
{

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.addInitScript( value =>
    {
        window.localStorage.setItem('token', value);
    }, token);


    await page.goto("https://rahulshettyacademy.com/client");
    // await page.locator("#userEmail").fill("rajnishdt@gmail.com");
    // await page.locator("[type='password']").fill("Playwright@123");
    // await page.locator("input.login-btn").click();
    // await page.waitForLoadState("networkidle");
    await page.locator(".card-body").first().waitFor();

    const productName = 'ZARA COAT 3';
    const products = await page.locator(".card-body");


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
    

    //PAGE 2

    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();

    //PAGE 3
    await page.locator("text=Checkout").click();
    await page.locator("[placeholder='Select Country']").pressSequentially("ind");
    const dropdown = await page.locator(".ta-results").first();
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();

    for (let i=0; i<optionsCount; ++i)
    {
        const text = await dropdown.locator("button").nth(i).textContent();

        if (text === " India")
        {
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
})