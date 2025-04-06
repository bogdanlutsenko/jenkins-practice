import { test } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/javascript_alerts");
  });
  test("Regular Alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(`Alert message: ${alert.message()}`);
    //   await page.waitForTimeout(3000);
      alert.accept();
    });
    let ckickForJsAlertButton = page.locator(
      "button.btn.btn-primary[onclick='jsAlert()']"
    );
    await ckickForJsAlertButton.click();

    // await page.waitForTimeout(3000);
  });

  test("Confirmation Alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(`Alert message: ${alert.message()}`);
    //   await page.waitForTimeout(3000);
      alert.dismiss();
    });

    let clickForJsConfirmButton = page.locator(
      "button.btn.btn-primary[onclick='jsConfirm()']"
    );
    await clickForJsConfirmButton.click();
    // await page.waitForTimeout(3000);
  });

  test("Prompt Alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(`Alert message: ${alert.message()}`);
    //   await page.waitForTimeout(3000);
      await alert.accept("Hello!!!");
    });

    let clickForJsPromptButton = page.locator(
      "button.btn.btn-primary[onclick='jsPrompt()']"
    );
    await clickForJsPromptButton.click();
    // await page.waitForTimeout(3000);
  });
});
