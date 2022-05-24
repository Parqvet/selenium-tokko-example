const { By, Key, until, wait } = require('selenium-webdriver')

const BasePage = require('./basePage')

class UpdateProp extends BasePage {

    async clickPortales() {
        //await driver.wait(until.elementLocated(By.id("content")))
        await driver.wait(until.elementLocated(By.id("propertysubmenu")))
        await driver.sleep(3000)
        await driver.findElement(By.css("#propertysubmenu > #tab5")).click()
    }

    async deleteMl() {
        await driver.wait(until.elementLocated(By.id("property_portals_container")))
        await driver.sleep(3000)
        await driver.findElement(By.xpath('//*[@id="portal_publications_1_0"]/li/div[6]/a/i')).click()
        await driver.sleep(8000)
    }

    async updateMl() {
        await driver.wait(until.elementLocated(By.xpath('//*[@id="add-pub-icon-1-0"]/i')))
        await driver.findElement(By.xpath('//*[@id="add-pub-icon-1-0"]/i')).click()
        await driver.sleep(3000)
        await driver.findElement(By.xpath('//*[@id="form_new_publication_1_0"]/button')).click()
        await driver.sleep(8000)
        await driver.findElement(By.xpath('//*[@id="property_portals_container"]/div[2]/div[1]/div[2]/i')).click()
        await driver.sleep(5000)
    }

    async closeTabAndBack() {
        let tabs = await driver.getAllWindowHandles()
        await driver.close()
        await driver.sleep(3000)
        await driver.switchTo().window(tabs[0])
        await driver.sleep(3000)
        await driver.findElement(By.xpath('//*[@id="fv_close"]')).click()
    }
}

module.exports = UpdateProp