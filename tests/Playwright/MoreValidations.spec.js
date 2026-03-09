const {test, expect} = require ('@playwright/test');



test("Popup validations",async({browser}) =>


    {
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        await page.goto("https://www.google.com/");
        // await page.goBack();
        // await page.goForward();
        await page.goBack();


        await expect (page.locator("#displayed-text")).toBeVisible();
        await page.locator("#hide-textbox").click();
        await expect (page.locator("#displayed-text")).toBeHidden();
        await page.on("dialog", dialog => dialog.accept());
        await page.locator("#confirmbtn").click();
        await page.locator("#mousehover").hover();

        const framePage = page.frameLocator("#courses-iframe");
        await  framePage.locator("li a[href*='lifetime-access']:visible").click();
        const textCheck = await framePage.locator(".text h2").textContent();
        const text = textCheck.split(" ")[1];
        console.log(text);

    });