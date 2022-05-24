const { By, Key, until, wait } = require('selenium-webdriver')

const BasePage = require('./basePage')

class LoginPage extends BasePage {

    async completarFormulario() {
        let inputName = await driver.wait(until.elementLocated(By.css("#login-left > #username")))
        await inputName.sendKeys('marcelo@yespropiedades.com')
        let inputPass = await driver.wait(until.elementLocated(By.css("#login-left > #wrapper-input-btn > #password")))
        await inputPass.sendKeys('1234marse')
    }

    async clickIngresar() {
        let btnIngresar = await driver.wait(until.elementLocated(By.css("#login-right > #login-send")))
        await btnIngresar.click()
    }
}

module.exports = LoginPage