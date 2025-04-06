import { test, expect } from "@playwright/test";

test.describe("Test group", () => {
  // create beforeeach to navifate to to https://practice.cydeo.com/
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");

    await expect(page).toHaveTitle("Practice");
    expect(await page.title()).toBe("Practice");
  });

  test("Verify checkboxes are checked", async ({ page }) => {
    // Test body
    let checkboxesLink = page.getByText("Checkboxes");
    await checkboxesLink.click();

    let firstCheckbox = page.locator("input[id='box1']");
    let secondCheckbox = page.locator("input[id='box2']");

    await firstCheckbox.check();
    await secondCheckbox.check();

    await expect(firstCheckbox).toBeChecked();
    await expect(secondCheckbox).toBeChecked();

    // --------------------------------------
    expect(await firstCheckbox.isChecked()).toBeTruthy();
  });

  test("Verify checkboxes are unchecked", async ({ page }) => {
    // Test body
    let checkboxesLink = page.getByText("Checkboxes");
    await checkboxesLink.click();

    let firstCheckbox = page.locator("input[id='box1']");
    let secondCheckbox = page.locator("input[id='box2']");

    await firstCheckbox.uncheck();
    await secondCheckbox.uncheck();

    await expect(firstCheckbox).not.toBeChecked();
    await expect(secondCheckbox).not.toBeChecked();

    expect(await firstCheckbox.isChecked()).toBeFalsy();
    expect(await secondCheckbox.isChecked()).toBeFalsy();
  });

  test("Verify text of the element", async ({ page }) => {
    // Test body
    let headerElement = page.locator("span.h1y");
    await expect(headerElement).toHaveText("Test Automation Practice");

    let actualText = await headerElement.innerText();
    expect(actualText).toEqual("Test Automation Practice");
  });
});
