const HomePage = require('../pageobjects/homePage')
const LoginPage = require('../pageobjects/loginPage')
const AdminPage = require('../pageobjects/adminPage')
const PropsPage = require('../pageobjects/propsPage')

let homePage

describe('Actualizar Tokko Broker', () => {

    beforeEach(async () => {
        homePage = await new HomePage()
        await homePage.goTo()
        
    })

    it('Actualizar todas las Propiedades', async () => {
        await homePage.clickLogin()
        
        let loginPage = new LoginPage()
        loginPage.completarFormulario()
        loginPage.clickIngresar()

        let adminPage = new AdminPage()
        adminPage.clickEnPropiedades()

        let propsPage = new PropsPage()
        return propsPage.seleccionarPropiedad()
        
    })
})