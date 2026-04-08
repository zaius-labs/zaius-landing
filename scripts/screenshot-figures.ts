import { chromium } from '@playwright/test';
import { join, dirname } from 'path';
import { mkdirSync } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, 'screenshots');
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);

const figures = await page.locator('figure.figure').all();
console.log(`Found ${figures.length} figures`);

for (let i = 0; i < figures.length; i++) {
  const fig = figures[i];
  await fig.scrollIntoViewIfNeeded();
  await page.waitForTimeout(2500);
  const outPath = join(OUT, `fig-${i + 1}.png`);
  await fig.screenshot({ path: outPath });
  console.log(`Saved fig-${i + 1}.png`);
}

await browser.close();
console.log('Done.');
