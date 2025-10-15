import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  retries: 1,
  use: {
    headless: true,
    baseURL: "https://www.saucedemo.com",
  },
  reporter: [["html", { outputFolder: "playwright-report" }]],
});
