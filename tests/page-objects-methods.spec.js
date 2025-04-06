import { test } from "@playwright/test";

test("Getting the tilte of the page", async ({ page }) => {
  // Test body
  await page.goto("https://practice.cydeo.com/");

  //   await page.waitForTimeout(3000); // Wait for the page to load

  // check page title
  const title = await page.title();
  console.log(title);
});

test("Getting the current url of the page", async ({ page }) => {
  // Test body
    await page.goto("https://practice.cydeo.com/");
    let actualUrl = await page.url();
    console.log(actualUrl);
});


test("Set the window size", async ({ page }) => {
  // Test body
  await page.goto("https://practice.cydeo.com/");
  await page.waitForTimeout(3000); 
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.waitForTimeout(3000);
});