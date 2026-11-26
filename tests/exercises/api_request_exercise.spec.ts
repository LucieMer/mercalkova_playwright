import { test } from "@playwright/test";

test("Exercise: API Get Request", async ({ request }) => {
  await request.get("https://www.tredgate.cloud/courses");
});
