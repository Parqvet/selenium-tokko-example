const { By, Key, until, wait } = require('selenium-webdriver')

const BasePage = require('./basePage')

class HomePage extends BasePage {

    goTo() {
        driver.get('https://www.tokkobroker.com/')
    }

    clickLogin() {
        let btnLogin = driver.wait(until.elementLocated(By.css("#header-login > .header-menu-login > a")))
        btnLogin.click()

        
    }
}

module.exports = HomePage