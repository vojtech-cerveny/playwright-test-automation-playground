import test from "@playwright/test";

// these tests are not tests due we are not testing anything :) this is for demonstration purposes
test.describe("Features", () => {
  test.skip("test1", async ({}) => {
    console.log("🟣 test1");
  });

  test("test2", async ({}) => {
    console.log("🟣 test2");
  });

  test.fixme("test3", async ({}) => {
    console.log("🟣 test3");
  });
});
