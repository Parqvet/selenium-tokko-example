const HomePage = require('./pageobjects/homePage')
const LoginPage = require('./pageobjects/loginPage')
const AdminPage = require('./pageobjects/adminPage')
const PropsPage = require('./pageobjects/propsPage')

async function updateTokkoBroker() {

    homePage = await new HomePage()
    await homePage.goTo()
    await homePage.clickLogin()

    let loginPage = await new LoginPage()
    await loginPage.completarFormulario()
    await loginPage.clickIngresar()

    let adminPage =await new AdminPage()
    await adminPage.clickEnPropiedades()

    let propsPage = await new PropsPage()
    await propsPage.seleccionarPropiedadYActualizar()

}

updateTokkoBroker()