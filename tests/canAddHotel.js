const {By, Key, until, Builder} = require("selenium-webdriver");
require("chromedriver");

async function test() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.name("username")).sendKeys("admin");
    await driver.findElement(By.name("password")).sendKeys("P@ssw0rd");
    await driver.findElement(By.tagName("button")).click();


    await driver.get("http://localhost:3000/hotels");
    const rows = await driver.findElements(By.className("row"));
    console.log(rows.length);

    await driver.findElement(By.name("addHotel")).click();

    await driver.wait(until.alertIsPresent());
        let alert1 = await driver.switchTo().alert();
        await alert1.sendKeys("ABC");
        await alert1.accept();
        let alert2 = await driver.switchTo().alert();
        await alert2.sendKeys("DEF");
        await alert2.accept();

    await driver.get("http://localhost:3000/hotels");
    const rows2 = await driver.findElements(By.className("row"));
    console.log(rows2.length);

    await driver.quit();
}
test();