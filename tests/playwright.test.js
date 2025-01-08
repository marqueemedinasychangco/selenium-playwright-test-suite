const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://sample-todo-app.com');
    await page.fill('#username', 'playwrightUser');
    await page.fill('#password', 'password123');
    await page.click('#login');
    await page.waitForTimeout(3000);
    console.log('Playwright Login test Passed');
    await browser.close();
})();

//adding comment