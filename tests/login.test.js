const { Builder, By, until} = require('selenium-webdriver');
const LoginPage = require('../pages/loginPage');
const { addTimestamp} = require('../utils/helpers');

{async function loginTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://sample-todo-app.com');
        let loginPage = new loginPage(driver);
        await loginPage.enterCredentials(addTimestamp('testUser'), 'password123');
        await loginPage.submit();
        await driver.wait(until.titleIs('Dashboard'), 5000);
        console.log('Login test Passed.');
    } catch (error) {
        console.error('Test Failed: ', error);
        await driver.takeScreenshot().then(
            function(image){
                require('fs').writeFileSync('screenshots/login-fail.png', image, 'base64');
            }
        )
    } finally {
        await driver.quit();
    }
    
}}

//adding comment