import { chromium } from '@playwright/test';
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';

await mkdir('public/images', { recursive: true });
await mkdir('artifacts', { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const results = [];
for (const [name, url] of [
  ['royalmines', 'https://www.royalminesproperty.com'],
  ['chop-express', 'https://chop-express.vercel.app/'],
  ['pos-dev', 'https://www.posterosdev.com/'],
]) {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  try {
    const response = await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 45000,
    });
    if (!response.ok()) throw new Error(`HTTP ${response.status()}`);
    const close = page.getByRole('button', { name: 'Close', exact: true });
    if (await close.count())
      await close
        .last()
        .click()
        .catch(() => {});
    await page.waitForTimeout(5000);
    await sharp(await page.screenshot())
      .resize(960, 600)
      .webp({ quality: 82 })
      .toFile(`public/images/${name}.webp`);
    results.push({
      name,
      url,
      status: response.status(),
      title: await page.title(),
      text: (await page.locator('body').innerText()).slice(0, 400),
    });
  } catch (error) {
    results.push({ name, url, error: error.message });
  }
  await page.close();
}
await browser.close();
await writeFile(
  'artifacts/project-links.json',
  JSON.stringify(results, null, 2),
);
console.log(JSON.stringify(results, null, 2));
