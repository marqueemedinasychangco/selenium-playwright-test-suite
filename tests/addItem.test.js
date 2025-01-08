const { Builder, By, until} = require('selenium-webdriver');
{async function addItemTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://sample-todo-app.com');
        await driver.wait(until.elementLocated(By.id('new-item')), 5000);
        await driver.findElement(By.id('new-item')).sendKeys('New Task');
        await driver.findElement(By,id('add-btn')).click();
        await driver.wait(until.elementLocated(By.xpath("//li[contains(text(), 'New Task')]")), 5000);
        console.log('Add Item test Passed.');
    } catch (error) {
        console.error('Test Failed: ', error);
    } finally {
        await driver.quit();
    }
    
}};

//adding comment