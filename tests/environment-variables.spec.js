import { test } from "@playwright/test";

test("@env-test Testing environment variables", async ({ page }) => {
    console.log(process.env.PRACTICE_USERNAME);
    console.log(process.env.PRACTICE_PASSWORD);

    console.log(`Username:  ${process.env.PRACTICE_USERNAME}`);
    console.log(`Password:  ${process.env.PRACTICE_PASSWORD}`);
});

test("@env-test2 Bypass authentication by enconing the credentials base64 format", async ({
  page,
}) => {
  let encoddeCredentials = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");
  page.setExtraHTTPHeaders({ Authorization: `Basic ${encoddeCredentials}` });
  await page.goto("https://practice.cydeo.com/basic_auth");
  await page.waitForTimeout(3000);
});
