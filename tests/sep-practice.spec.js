import { test } from "@playwright/test";

test("@smoke SEP Practice", async ({ page }) => {
  const code = Buffer.from(
    `${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`
  ).toString("base64");

  await page.setExtraHTTPHeaders({ Authorization: `Basic ${code}` });
  await page.goto(process.env.SEP_QA_URL);
  await page.waitForTimeout(3000);

  let firstNameInputBox = page.locator("//input[@formcontrolname='firstName']");
  await firstNameInputBox.fill("Bogdan");
  await page.waitForTimeout(2000);

  let lastNameInputBox = page.locator("//input[@formcontrolname='lastName']");
  await lastNameInputBox.fill("Lutsenko");
  await page.waitForTimeout(2000);

  let emailInputBox = page.locator("//input[@formcontrolname='email']");
  await emailInputBox.fill("bl.lutsenko@gmail.com");
  await page.waitForTimeout(2000);

  let phoneNumberNameInputBox = page.locator(
    "//input[@formcontrolname='phoneNumber']"
  );
  await phoneNumberNameInputBox.fill("1234567890");
  await page.waitForTimeout(2000);

  let howDidYouHearDropDown = page.locator(
    "//mat-label[text()='How did you hear about us?']"
  );
  await howDidYouHearDropDown.click();

  await page.click("//span[text()='Email']");

  let nextButton1 = page.locator("//button[@type='submit']");
  await nextButton1.click();

  // Setp2: Payment Plan

  let upfrontPaymentPlan = page.locator("#mat-expansion-panel-header-0");
  await upfrontPaymentPlan.click();

  let nextButton2 = page.locator(
    "//button[@class='next-button' and text()='Next']"
  );
  await nextButton2.click();

  // Setp3: Review

  let paymentFrame = page.frameLocator(
    "//iframe[@title='Secure payment input frame']"
  );

  let cardNumberInputBox = paymentFrame.locator(
    "//input[@id='Field-numberInput']"
  );
  await cardNumberInputBox.fill("5555555555554444");

  let expirationDateInputBox = paymentFrame.locator(
    "//input[@id='Field-expiryInput']"
  );
  await expirationDateInputBox.fill("12/30");

  let securityCodeInputBox = paymentFrame.locator(
    "//input[@id='Field-cvcInput']"
  );
  await securityCodeInputBox.fill("123");

  let zipCodeInputBox = paymentFrame.locator(
    "//input[@id='Field-postalCodeInput']"
  );
  await zipCodeInputBox.fill("12345");

  let termsConditionsCheckBox = page.locator("//input[@id='defaultCheck2']");
  await termsConditionsCheckBox.check();

  let payButton = page.locator(
    "//button[contains(@class, 'next-button') and .//span[text()='Pay']]"
  );

  await payButton.click();

  await page.waitForTimeout(3000);
});
