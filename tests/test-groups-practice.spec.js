import { test } from "@playwright/test";

test.describe("Practice.cydeo", () => {


  test.beforeAll(async () => {
    console.log("Before All Test Case");
  });

  test.afterAll(async () => {
    console.log("After All Test Case");
  });

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
  });

  test("Title of the page", async ({ page }) => {
    console.log(await page.title());
  });

  test("URL of the page", async ({ page }) => {
    console.log(page.url());
  });
});