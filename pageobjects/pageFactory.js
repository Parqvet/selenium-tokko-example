const chromedriver = require('chromedriver')
const webdriver = require('selenium-webdriver')

async function createPage(url, browser) {

    let driver = await new webdriver.Builder()
    .forBrowser(browser)
    .build()

    const page = driver.get(url)
    
    return {
        driver,
        page
    }
}

module.exports = createPage