 const {test} = require ('@playwright/test')


 test('Day3 Child window practice', async ({browser}) =>
{

    const context = await browser.newContext();
    const page  = await context.newPage();
    const username = await page.locator("#username");
    const documentLink =await page.locator("[href*='documents-request']");


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const [newPage] = await Promise.all (
        
        [context.waitForEvent('page'),
         documentLink.click()
    ]);
    const redtext = await (newPage.locator(".red").textContent());
    console.log(redtext);

    const text = redtext.split("@");
    const domain = text[1].split(" ")[0];
    console.log(domain);

    await username.fill(domain);
    
    console.log(await username.inputValue());
    await page.pause();

})