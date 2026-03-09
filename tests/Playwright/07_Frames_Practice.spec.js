const {test, expect} = require ('@playwright/test');


test("Frames Practice", async ({browser}) =>
{

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.goto("https://www.google.com/");
    await page.goBack();


    await expect (page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect (page.locator("#displayed-text")).toBeHidden();

    await page.on("dialog", dialog => dialog.accept());
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();

    const framePage = await page.frameLocator("#courses-iframe");
    await framePage.locator("li a[href*='lifetime-access']:visible").click();
    const text = await framePage.locator(".text h2").textContent();
    console.log(text.split(" ")[1]);


})

