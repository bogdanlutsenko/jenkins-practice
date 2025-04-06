import { test } from "@playwright/test";

test.describe("Group of tests", () => {
  
  
    test.beforeAll(async () => {
    console.log("Before All Test Case");
  });

  test.afterAll(async () => {
    console.log("After All Test Case");
  });

  test.beforeEach(async () => {
    console.log("Before Each Test Case");
  });

  test.afterEach(async () => {
    console.log("After Each Test Case");
  });

  test("Test Case 1", async ({ page }) => {
    console.log("Test Case 1 executed");
  });

  test("Test Case 2", async ({ page }) => {
    console.log("Test Case 2 executed");
  });

  test("Test Case 3", async ({ page }) => {
    console.log("Test Case 3 executed");
  });

  test("Test Case 4", async ({ page }) => {
    console.log("Test Case 4 executed");
  });
});
