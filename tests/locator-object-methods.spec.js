import { test } from "@playwright/test";

test.describe("", () => {

  // create beforeEach hook which navigate https://practice.cydeo.com/"
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");
    });

  test("Check: checks the radio buttons and check boxes if they have not been checked yet", async ({ page }) => {
    // Test body
    // let checkboxesLink = page.locator("a[href='/checkboxes']");
    let checkboxesLink = page.getByText("Checkboxes");
    await checkboxesLink.click();

    // await page.waitForTimeout(3000);

    let checkbox1 = page.locator("input[id='box1']");
    await checkbox1.check();
    // await page.waitForTimeout(3000);
  });

  test("Uncheck: unchecks the radio buttons and check boxes if they have not been unchecked yet", async ({
    page,
  }) => {
    // Test body
    let checkboxesLink = page.getByText("Checkboxes");
    await checkboxesLink.click();

    // await page.waitForTimeout(3000);
    
    let checkbox2 = page.locator("#box2");
    await checkbox2.uncheck();
    // await page.waitForTimeout(3000);
  });

  test("SelectOption: used for dropdown boxes with select tagname", async ({ page }) => {
    // Test body
    let dropdownLink = page.locator("a[href='/dropdown']");
    await dropdownLink.click();
    // await page.waitForTimeout(3000);

    let simpleDropdown = page.locator("//select[@id='dropdown']");
    // simpleDropdown.selectOption("1"); // selecting by the value
    // simpleDropdown.selectOption({label: "Option 1"}); // selecting by text
    await simpleDropdown.selectOption({ index: 1 }); // selecting by index
    // await page.waitForTimeout(3000);

  });
});
