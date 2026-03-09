const {test, expect} =  require ('@playwright/test');

test ('Day2practice', async ({browser}) =>

{

    const context = await browser.newContext();
    const page = await context.newPage();
    


    const username = page.locator ("[name='username']");
    const password = page.locator("[type = 'password']");
    const signIn = page.locator("[id='signInBtn']");

    await page.goto ("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await username.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK21");
    await signIn.click();
    console.log ( await page.locator("[style *='block']").textContent());
    await expect(page.locator("[style *= 'block']")).toContainText("Incorrect");
    await password.fill ("Learning@830$3mK2");
    await signIn.click();
    console.log(await page.locator(".card-body a").nth(0).textContent());
    await expect(page.locator(".card-body a").nth(0)).toContainText("iphone");

});
