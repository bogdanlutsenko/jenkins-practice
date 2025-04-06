import { test, expect } from "@playwright/test";

test("iframe test", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/iframe");

//   let myFrame = page.frameLocator("//iframe[@id='mce_0_ifr']");
  let myFrame = page.frameLocator("iframe#mce_0_ifr");

  let elementInsideTheFrame = myFrame.locator("//body[@id='tinymce']");

  await elementInsideTheFrame.clear();
//   await elementInsideTheFrame.press("Control+A", "Backspace");

//   await page.waitForTimeout(3000);

  await elementInsideTheFrame.fill("Hello from the iframe!");

//   await page.waitForTimeout(3000);

  await expect(elementInsideTheFrame).toHaveText("Hello from the iframe!");
});
