const {test, expect} =require ('@playwright/test');


test('Day3Practice', async ({browser}) =>
{

    const context = await browser.newContext();
    const page = await context.newPage();

    const username = page.locator("[name='username']");
    const password = page.locator("#password");
    const radiobutton = page.locator(".radiotextsty").nth(1);
    const termsButton = page.locator("#terms");
    const signButton = page.locator("#signInBtn");
    const dropdown = page.locator("select.form-control");
    const blinklink = page.locator("[href*='documents-request']");


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await username.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await radiobutton.click();
    await page.locator("[id='okayBtn']").click();
    await expect(radiobutton).toBeChecked();
    await dropdown.last().selectOption("Consultant");
    await termsButton.click();
    await expect (termsButton).toBeChecked();
    await termsButton.uncheck();
    expect (await (termsButton).isChecked()).toBeFalsy();
    await page.locator("[href*='documents-request']").click();
    await expect (blinklink).toHaveAttribute("class","blinkingText");
    await signButton.click();
    await page.pause();
}
);
