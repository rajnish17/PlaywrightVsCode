const {test} = require ('@playwright/test');


test('Child Window', async({browser}) =>
{

    const context = await browser.newContext();
    const page =  await context.newPage();
    const username = page.locator("#username");
    const documentLink = page.locator("[href*='documents-request']");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");


    const [newPage] = await Promise.all(

    [
    context.waitForEvent('page'),
    documentLink.click(),
    ])

    const text = await newPage.locator(".red").textContent();
    console.log(text);

    const arrayText = text.split("@");
    const domain = arrayText[1].split(" ")[0];

    console.log(domain);
    await username.fill(domain);
    console.log(await username.inputValue());

})

