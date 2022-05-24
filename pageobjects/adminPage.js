const { By, Key, until, wait } = require('selenium-webdriver')

const BasePage = require('./basePage')

class AdminPage extends BasePage {

    clickEnPropiedades() {
        let linkProps = driver.wait(until.elementLocated(By.css("#menu > li > #a_properties")))
        linkProps.click()
    }
}

module.exports = AdminPage