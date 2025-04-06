import { test, expect } from "@playwright/test";

test("Web table practice", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/web-tables");

  let table = page.locator("//table[@class='SampleTable']");

  let rows = await table.locator("//tr").all();
  let columns = await table.locator("//th").all();
  let cells = await table.locator("//td").all();

  expect(rows.length).toBe(9);
  expect(columns.length).toBe(13);
  expect(cells.length).toBe(104);

  for (let cell of cells) {
    console.log("Inner text: " + await cell.innerText());
    console.log("Text content: " + (await cell.textContent()));
  }
});

test("Web table practice 2", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/web-tables");

  let table = page.locator("//table[@class='SampleTable']");

  let rows = await table.locator("//tr").all();

  //create a loop to print each cell's data of each row
  // for (let i = 1; i < rows.length; i++) {
  //     let cells = await table.locator(`//tr[${i}]/td`).all();
  //     for (let cell of cells) {
  //         console.log(await cell.innerText());
  //     }
  // }

  //create a foreach loop to print each cell's data of each row
  //   for (let row of rows) {
  //     let cells = await row.locator("//td").all();
  //     for (let cell of cells) {
  //       console.log(await cell.innerText());
  //     }
  //   }

  for (let row of rows) {
    let cells = await row.locator("//td").all();
    for (let i = 1; i < cells.length - 1; i++) {
      console.log(await cells[i].innerText());
    }
    console.log(
      "----------------------------------------------------------------"
    );
  }
});

test("Web table practice 3", async ({ page }) => {
    await page.goto("https://practice.cydeo.com/web-tables");

    let table = page.locator("//table[@class='SampleTable']");

    let checkboxes = await table.locator("//input[@type='checkbox']").all();


    for (let checkbox of checkboxes) {
        await checkbox.check();
        expect(await checkbox.isChecked()).toBeTruthy();
        await expect(checkbox).toBeChecked();
    }
    await page.waitForTimeout(3000);

});
