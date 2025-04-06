import { test } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });
  test("InnerText(): retrives a visible text", async ({ page }) => {
    // Test body
    let headerElement = page.locator("//span[@class='h1y']");
    let actualText = await headerElement.innerText();
    console.log(actualText);
  });

  test("InputValue(): only works with <input>, <textarea>, <select>, retreives the input value", async ({ page }) => {
    // Test body
    let inputElement = page.getByText("Inputs");
    await inputElement.click();

    await page.waitForTimeout(3000);

    let inpugBox = page.locator("//input[@type='number']");
    await page.waitForTimeout(3000);
    await inpugBox.fill("123");
    await page.waitForTimeout(3000);

    let actualValue = await inpugBox.inputValue();
    console.log(actualValue);
  });

  test("getAttribute(): retreives the attribute", async ({ page }) => {
    // Test body
    let abTestingLink = page.getByText("A/B Testing");

    let hreflink = await abTestingLink.getAttribute("href");
    console.log(hreflink);
    await page.waitForTimeout(3000);
    await abTestingLink.click();
    await page.waitForTimeout(3000);
  });
});
