const {test, expect} = require ('@playwright/test');


test.only("E2E with Special locators", async({browser}) =>

    {
        const context = await browser.newContext();
        const page = await context.newPage();

        //PAGE1
        await page.goto("https://rahulshettyacademy.com/client");
        await page.getByPlaceholder("email@example.com").fill("rajnishdt@gmail.com");
        await page.getByPlaceholder("enter your passsword").fill("Playwright@123");
        await page.getByRole("button",{name:"Login"}).click();


        //PAGE2
        await page.waitForLoadState("networkidle");
        await  page.locator(".card-body ").first().waitFor();
        await page.locator(".card-body").filter({hasText : "ZARA COAT 3"})
        .getByRole("button", {name : " Add To Cart"}).click();
        await page.getByRole("listitem").getByRole("button", {name : "Cart"}).click();


        //PAGE3
        await page.locator("div li").first().waitFor();
        await expect(page.getByText("ZARA COAT 3")).toBeVisible();
        await page.getByRole("button", {name : "Checkout"}).click();

        //PAGE4
        await page.getByPlaceholder("Select Country").pressSequentially("ind");
        await page.getByRole("button",{name : "India"}).nth(1).click();
        await page.getByRole("textbox").first().fill(" ");
        await page.getByRole("textbox").first().fill("1234 5678 1234 5678");
        await page.getByRole("combobox").first().selectOption("10");
        await page.getByRole("combobox").last().selectOption("20");
        await page.getByRole("textbox").nth(1).fill("123");
        await page.getByRole("textbox").nth(2).fill("Rajneesh");
        await page.locator('input[name="coupon"]').fill("rahulshettyacademy");
        await page.getByRole("button",{name :"Apply Coupon"}).click();
        await page.getByText("Coupon Applied").waitFor();
        await page.getByText("PLACE ORDER").click();

        //PAGE5
        await expect(page.getByText("ZARA COAT 3")).toBeVisible();
        await page.pause();















 })


