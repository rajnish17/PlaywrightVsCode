const {test, expect} = require('@playwright/test')


test.only('Calender validations', async ({browser}) =>
{

    const context = await browser.newContext();
    const page = await context.newPage();


    const collect = "2027-06-15";
    const monthNumber = "6";
    const date = "15";
    const year = "2027";
 
    const expectedList  = [collect, monthNumber, date, year]
 
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click();
    await page.locator("button.react-calendar__month-view__days__day:has-text('"+ date +"')").click();
 
    const inputs = page.locator("div.react-date-picker__inputGroup input");
 
 
    for(let index = 0; index<await inputs.count(); index++)
    {
        const actual = await  inputs.nth(index).getAttribute("value");
        expect(actual).toEqual(expectedList[index]);
    }
 
 
})