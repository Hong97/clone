import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const routes = [
  { path: "/", name: "01-hub" },
  { path: "/nirok", name: "02-nirok" },
  { path: "/grok", name: "03-grok" },
  { path: "/xenith-trading", name: "04-xenith-trading" },
  { path: "/xenith-ai", name: "05-xenith-ai" },
];

await mkdir("./docs/screenshots", { recursive: true });
const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  deviceScaleFactor: 1.5,
});
for (const r of routes) {
  const page = await ctx.newPage();
  console.log(`Screenshotting ${r.path}...`);
  await page.goto(`http://localhost:5173${r.path}`, {
    waitUntil: "networkidle",
    timeout: 30000,
  });
  await page.waitForTimeout(500);
  await page.screenshot({
    path: `./docs/screenshots/${r.name}.png`,
    fullPage: true,
  });
  await page.close();
  console.log(`  ✓ docs/screenshots/${r.name}.png`);
}
await browser.close();
console.log("Done.");
