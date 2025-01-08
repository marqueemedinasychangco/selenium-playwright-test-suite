const { Builder, By, until} = require('selenium-webdriver');
{async function delteItemTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://sample-todo-app.com');
        await driver.wait(until.elementLocated(By.xpath("//li[contains(text(), 'New Task')]")), 5000);
        await driver.findElement(By.xpath("//li[contains(text(), 'New Task')]/button")).click();
        await driver.wait(until.stalenessOf(driver.findElement(By.xpath("//li[contains(text(), 'New Task')]"))), 5000);
        console.log('Delete Item test Passed.');
    } catch (error) {
        console.error('Test Failed: ', error);
    } finally {
        await driver.quit();
    }
    
}};

//adding comment