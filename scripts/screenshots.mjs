import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, '..', 'screenshots');
const BASE = process.env.SCREENSHOT_BASE_URL || 'https://astro-art-portfolio.netlify.app';
const VIEWPORT = { width: 1440, height: 900 };

async function setTheme(page, theme) {
  await page.evaluate((t) => {
    localStorage.setItem('theme', t);
    document.documentElement.classList.toggle('dark', t === 'dark');
    document.documentElement.classList.toggle('light', t === 'light');
  }, theme);
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
}

async function waitReady(page) {
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(800);
}

async function shot(page, name) {
  const file = path.join(OUT, `${name}.png`);
  await page.screenshot({ path: file, fullPage: false });
  console.log('wrote', file);
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  for (const theme of ['light', 'dark']) {
    await page.goto(BASE, { waitUntil: 'networkidle' });
    await setTheme(page, theme);
    await waitReady(page);
    await shot(page, `home-${theme}`);

    const gallery = page.locator('#my-gallery');
    if (await gallery.count()) {
      await gallery.scrollIntoViewIfNeeded();
      await page.waitForTimeout(400);
      await shot(page, `gallery-${theme}`);
    } else {
      console.warn('No #my-gallery; skipping gallery shot');
    }

    await page.goto(`${BASE.replace(/\/$/, '')}/about`, {
      waitUntil: 'networkidle',
    });
    await setTheme(page, theme);
    await waitReady(page);
    await shot(page, `about-${theme}`);
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
