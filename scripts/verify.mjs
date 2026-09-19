import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';

await mkdir('artifacts', { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const report = { viewports: [], externalLinks: [] };
try {
  for (const width of [375, 768, 1024, 1440]) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
      reducedMotion: 'reduce',
    });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      if (message.type() === 'error' || message.type() === 'warning')
        errors.push(message.text());
    });
    await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
    for (const image of await page.locator('img').all()) {
      await image.scrollIntoViewIfNeeded();
      await image.evaluate((element) => element.decode());
    }
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.locator('#home').scrollIntoViewIfNeeded();
    assert.equal(await page.locator('h1').count(), 1);
    assert.equal(await page.title(), 'Ahmed Adeshina | Full-Stack Developer');
    assert.ok(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      'Horizontal overflow',
    );
    assert.ok(
      await page
        .locator('img')
        .evaluateAll((images) =>
          images.every((img) => img.complete && img.naturalWidth > 0),
        ),
      'Broken image',
    );
    assert.ok(
      await page
        .locator('a[href^="#"]')
        .evaluateAll((links) =>
          links.every((link) => document.getElementById(link.hash.slice(1))),
        ),
      'Broken internal target',
    );
    assert.ok(
      await page
        .locator('a[href^="http"],a[href^="mailto"]')
        .evaluateAll((links) =>
          links.every(
            (link) =>
              link.target === '_blank' &&
              link.rel.includes('noopener') &&
              link.rel.includes('noreferrer') &&
              link.href === link.href.trim(),
          ),
        ),
    );
    if (width < 1024) {
      const menu = page.locator('button[aria-controls="site-navigation"]');
      await menu.focus();
      await page.keyboard.press('Enter');
      assert.equal(await menu.getAttribute('aria-expanded'), 'true');
      await page.keyboard.press('Escape');
      assert.equal(await menu.getAttribute('aria-expanded'), 'false');
      assert.ok(
        await menu.evaluate((element) => element === document.activeElement),
      );
      await menu.click();
      await page
        .getByRole('navigation')
        .getByRole('link', { name: 'Projects', exact: true })
        .click();
      assert.equal(await menu.getAttribute('aria-expanded'), 'false');
    } else {
      await page
        .getByRole('navigation')
        .getByRole('link', { name: 'Projects', exact: true })
        .click();
    }
    await page.waitForTimeout(200);
    assert.equal(
      await page
        .locator('#site-navigation a[href="#projects"]')
        .getAttribute('aria-current'),
      'location',
    );
    const caseStudy = page
      .locator('summary')
      .filter({ hasText: 'Read Case Study' });
    await caseStudy.focus();
    await page.keyboard.press('Enter');
    assert.ok(
      await caseStudy.evaluate((element) => element.parentElement.open),
    );
    await page.keyboard.press('Enter');
    const cvLinks = page.locator('a[download="Ahmed-Adeshina-CV.docx"]');
    assert.equal(await cvLinks.count(), 3);
    assert.ok(
      await cvLinks.evaluateAll((links) =>
        links.every(
          (link) =>
            link.getAttribute('href') === '/Ahmed-Adeshina-CV.docx' &&
            link.hasAttribute('download'),
        ),
      ),
    );
    const cvResponse = await page.request.get(
      'http://localhost:4173/Ahmed-Adeshina-CV.docx',
    );
    assert.equal(cvResponse.status(), 200);
    assert.ok((await cvResponse.body()).byteLength > 0);
    const axe = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    report.viewports.push({
      width,
      accessibilityViolations: axe.violations.map((v) => ({
        id: v.id,
        description: v.description,
        nodes: v.nodes.map((n) => n.target),
      })),
      errors,
    });
    await page.locator('#home').scrollIntoViewIfNeeded();
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({
      path: `artifacts/portfolio-${width}.png`,
      fullPage: true,
    });
    await page.screenshot({ path: `artifacts/viewport-${width}.png` });
    await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
    await page.locator('.skip-link').waitFor({ state: 'attached' });
    await page.keyboard.press('Tab');
    assert.equal(
      await page.evaluate(() => document.activeElement.textContent),
      'Skip to main content',
    );
    const focus = await page.evaluate(
      () => getComputedStyle(document.activeElement).outlineStyle,
    );
    assert.notEqual(focus, 'none');
    await page.keyboard.press('Enter');
    assert.equal(await page.evaluate(() => document.activeElement.id), 'main');
    assert.equal(errors.length, 0, errors.join('\n'));
    assert.equal(
      axe.violations.length,
      0,
      JSON.stringify(report.viewports.at(-1)),
    );
    if (width === 1440) {
      const urls = await page
        .locator('a[href^="https"]')
        .evaluateAll((links) => [...new Set(links.map((link) => link.href))]);
      for (const url of urls) {
        try {
          const response = await page.request.get(url, { timeout: 30000 });
          report.externalLinks.push({ url, status: response.status() });
        } catch (error) {
          report.externalLinks.push({
            url,
            error: error.message.split('\n')[0],
          });
        }
      }
    }
    await context.close();
  }
} finally {
  await writeFile(
    'artifacts/verification.json',
    JSON.stringify(report, null, 2),
  );
  console.log(JSON.stringify(report, null, 2));
  await browser.close();
}
