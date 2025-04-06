import { test, expect } from "@playwright/test";
test("Bypass authentication by embedding the credentials in the URL", async ({
  page,
}) => {
  // https://username:pssword@practice.cydeo.com/
  await page.goto("https://admin:admin@practice.cydeo.com/");
  // await page.goto("//practice.cydeo.com/basic_auth");
  await page.waitForTimeout(3000);
});

test("Bypass authentication by enconing the credentials base64 format", async ({
  page,
}) => {
  let encoddeCredentials = Buffer.from("admin:admin").toString("base64");
  page.setExtraHTTPHeaders({Authorization: `Basic ${encoddeCredentials}`});
  await page.goto("https://practice.cydeo.com/basic_auth");
  await page.waitForTimeout(3000);
});
