import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {
    let linkElements;
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");

    await expect(page).toHaveTitle("Practice");
    expect(await page.title()).toBe("Practice");
    linkElements = await page.locator("//ul[@class='list-group']/li/a").all();
  });

  test("Verify that there are exactly 50 link elements within the <ul> tag", async ({page,}) => {
    // let linkElements = await page
    //   .locator("//ul[@class='list-group']/li/a")
    //   .all();
      expect(linkElements.length).toBe(50);
  });

  test("Verify that there are exactly 50 link elements within the <ul> tag is visible and clickable", async ({page,}) => {
    //  let linkElements = await page
    //    .locator("//ul[@class='list-group']/li/a")
    //    .all();
       for (let e of linkElements) {
           await expect(e).toBeVisible();
           expect(await e.isVisible()).toBeTruthy();
           await expect(e).toBeEnabled();
           expect(await e.isEnabled()).toBeTruthy();

        }
  });

  test("Verify that each of 50 link elements within the <ul> tag have an href attribute", async ({
    page,
  }) => {
        //  let linkElements = await page
        //    .locator("//ul[@class='list-group']/li/a")
        //    .all();
           for (let e of linkElements) {
            await expect(e).toHaveAttribute("href");
            console.log(await e.getAttribute("href"));
               let href = await e.getAttribute("href");
               await expect(href).not.toBeNull();
               await expect(href).not.toBe("");
           }
  });
});
