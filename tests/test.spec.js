const { firefox } = require('playwright');
const { test, expect } = require('@playwright/test');

test.describe('My Test Suite', () => {
  test('My Test Case', async ({}) => {
    const browser = await firefox.launch();
    const page = await browser.newPage();
    
    await authenticate(page);

    await browser.close();
  });
});

async function authenticate(page) {
  await page.goto('https://bitheap.tech');
  const loginTrigger = page.locator('#menu-item-1311, #menu-item-2330, .xoo-el-login-tgr').first();
  await loginTrigger.click({ timeout: 10000 }).catch(async () => {
    await page.click('.xoo-el-login-tgr');
  });

  await page.locator("[name='xoo-el-username']").fill(process.env.BITHEAP_USERNAME || 'playwright');
  await page.locator("[name='xoo-el-password']").fill(process.env.PASS || 'playwright');
  
  const submitBtn = page.locator('button.xoo-el-login-btn').first();
  await submitBtn.click();

  const textElement = page.locator('css=#menu-item-1314 > a, css=#menu-item-2330 > a, .xoo-el-login-tgr > a').first();
  const text = await textElement.textContent({ timeout: 5000 }).catch(() => "");
  if (text != "Hello, Playwright") {
    console.error("The authentication was not successful!");
  }
  await page.screenshot({ path: 'screenshot.png' });
}
