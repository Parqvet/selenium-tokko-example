const chromedriver = require('chromedriver')
const webdriver = require('selenium-webdriver')
const { By, until, WebElement, manage, window } = require('selenium-webdriver')

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build()

    driver.manage().window().maximize()

class BasePage {

    constructor() {
        global.driver = driver
    }

    goTo(url) {
        driver.get(url)
    }
}

module.exports = BasePage