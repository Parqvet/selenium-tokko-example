const { By, Key, until, wait, window } = require('selenium-webdriver')

const UpdateProp = require('../pageobjects/adminPropPage')

const BasePage = require('./basePage')

class PropsPage extends BasePage {

    async seleccionarPropiedadYActualizar() {

        await driver.wait(until.elementLocated(By.css("#search_table_holder > #resultados-table > tbody > tr")))
        await driver.sleep(3000)
        
        let listPagination = await driver.findElements(By.css("#pagination_search_property_result > li"))
        
        for (let z = 4; z <= listPagination.length - 2; z++) {
            
            let listProps = await driver.findElements(By.css("#search_table_holder > #resultados-table > tbody > tr"))

            //let btnPag = await driver.findElement(By.xpath(`//*[@id="pagination_search_property_result"]/li[${z}]`))

            if(listProps) {

                for (let i = 1; i <= listProps.length; i++) {

                    let scroll = 'window.scrollTo(0, 300)'
                    await driver.executeScript(scroll)
                    await driver.sleep(3000)
                    
                    if(i >= 1 && i < 7) {
                        // let elmProp = await driver.findElement(By.xpath(`//*[@id="search_results"]/tr[${7}]`))
                        // await driver.executeScript('arguments[0].scrollIntoView(false)', elmProp);
                        await driver.findElement(By.xpath(`//*[@id="search_results"]/tr[${i}]`)).click()
                        await driver.sleep(5000)

                        await driver.wait(until.elementLocated(By.id("fv_addfav")))
                        
                        await driver.findElement(By.css("#fullview_left > #fv_addfav > #fullview_view_edit_own_property")).click()

                        //await driver.sleep(3000)
                        let tabs = await driver.getAllWindowHandles()
                        await driver.switchTo().window(tabs[1])

                        await driver.sleep(3000)
                        let updateProp = await new UpdateProp()
                        await updateProp.clickPortales()
                        await updateProp.deleteMl()
                        await updateProp.updateMl()

                        await updateProp.closeTabAndBack()
                        await driver.sleep(2000)

                        //await driver.findElement(By.xpath('//*[@id="fv_close"]')).click()
                    }

                    if(i >= 7 && i < 12) {
                        // await driver.executeScript('arguments[0].scrollIntoView()', elmProp);
                        
                        let scroll = 'window.scrollBy(0, 450)'
                        await driver.executeScript(scroll)
                        
                        await driver.findElement(By.xpath(`//*[@id="search_results"]/tr[${i}]`)).click()
                        await driver.sleep(5000)

                        await driver.wait(until.elementLocated(By.id("fv_addfav")))
                        
                        await driver.findElement(By.css("#fullview_left > #fv_addfav > #fullview_view_edit_own_property")).click()

                        //await driver.sleep(3000)
                        let tabs = await driver.getAllWindowHandles()
                        await driver.switchTo().window(tabs[1])

                        await driver.sleep(3000)
                        let updateProp = await new UpdateProp()
                        await updateProp.clickPortales()
                        await updateProp.deleteMl()
                        await updateProp.updateMl()

                        await updateProp.closeTabAndBack()
                        await driver.sleep(2000)
                    }

                    if(i >= 12 && i < 16) {
                        let scroll = 'window.scrollBy(0, 500)'
                        await driver.executeScript(scroll)

                        await driver.findElement(By.xpath(`//*[@id="search_results"]/tr[${i}]`)).click()
                        await driver.sleep(5000)

                        await driver.wait(until.elementLocated(By.id("fv_addfav")))
                        
                        await driver.findElement(By.css("#fullview_left > #fv_addfav > #fullview_view_edit_own_property")).click()

                        //await driver.sleep(3000)
                        let tabs = await driver.getAllWindowHandles()
                        await driver.switchTo().window(tabs[1])

                        await driver.sleep(3000)
                        let updateProp = await new UpdateProp()
                        await updateProp.clickPortales()
                        await updateProp.deleteMl()
                        await updateProp.updateMl()

                        await updateProp.closeTabAndBack()
                        await driver.sleep(2000)
                    }

                    if(i == 15) {
                        let scroll = 'window.scrollBy(0, 250)'
                        await driver.executeScript(scroll)
                        await driver.sleep(3000)

                    }

                }
                
            }
            
            await driver.sleep(2000)
            await driver.findElement(By.xpath(`//*[@id="pagination_search_property_result"]/li[${z}]`)).click()

            if(z == 9) {
                console.log('************* Success!!! *****************');
            }
        }

    }
}

module.exports = PropsPage