import { test, expect } from "@playwright/test";

test("Window pop-up practice", async ({ page }) => {
  // creating even listener for new window pop-up
  let promissednewPageEvent = page.waitForEvent("popup");

  await page.goto("https://practice.cydeo.com/windows");

  await page.click("text='Click Here'"); // this will open a new window POP-UP event
//   await page.waitForTimeout(3000);
  let newPage = await promissednewPageEvent; // awate for the promise to be resolved
  await expect(newPage).toHaveTitle("New Window");
  await expect(page).toHaveTitle("Windows");

  await page.bringToFront();
//   await page.waitForTimeout(3000);
  let firstWindowElement = page.getByText("Opening a new window");
  await expect(firstWindowElement).toBeVisible();

  await newPage.bringToFront();
//   await page.waitForTimeout(3000);
  let secondWindowElement = newPage.getByText("New Window");
  await expect(secondWindowElement).toBeVisible();
});
