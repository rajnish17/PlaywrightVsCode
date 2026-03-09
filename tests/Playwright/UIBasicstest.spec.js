const {test, expect} = require ('@playwright/test');

test('Browser context First Playwright test', async ({browser}) =>

{
    const context = await browser.newContext();
    const page = await context.newPage();

    const username = page.locator("[name='username']"); // created for username
    const SignIn = page.locator("[value='Sign In']");  // created for SignIn
    const cardTitles = page.locator(".card-body a");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await username.fill("rahulshetty");
    await page.locator("[type='password']").fill("Learning@830$3mK2");
    await SignIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    await username.fill("");
    await username.fill("rahulshettyacademy");
    await SignIn.click();
    /* console.log (await cardTitles.nth(0).textContent()); */
    await page.locator(".card-body a").first().waitFor();
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
    
    
});

test('Page Playwright test', async ({page}) =>

{
    //chrome - plugins/ cookies
    //const context = await browser.newContext();
    //const page = await context.newPage();
    await page.goto("https://google.com/");

    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});

test('UI controls', async ({page}) =>
{

    const userName = page.locator("[id='username']");
    const password = page.locator("[name='password']");
    const dropDown = page.locator("select.form-control");


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await userName.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await dropDown.selectOption("Consultant");
    await page.locator(".radiotextsty").nth(1).click();
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").nth(1).isChecked());
    await expect (page.locator(".radiotextsty").nth(1)).toBeChecked();
    await page.locator("#terms").click();
    await expect (page.locator("#terms")).toBeChecked();
    expect (await page.locator("#terms").isChecked()).toBeTruthy();
    await page.locator("#terms").uncheck();
    expect (await page.locator("#terms").isChecked()).toBeFalsy();
    await page.locator("#signInBtn").click();
    await page.pause();

});

