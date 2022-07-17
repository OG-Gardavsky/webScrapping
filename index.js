const puppeteer = require('puppeteer');


const goToNextPage = async(page) => {
    const nextButton = (await page.$x('/html/body/div[2]/div[1]/div[2]/div[3]/div[3]/div/div/div/div/div[3]/div/div[22]/ul[1]/li[12]/a'))[0]
    nextButton.click()
}

const run = async () => {
    const browser = await puppeteer.launch({
        headless: false,    
    });
    const page = await browser.newPage()
    
    
    // because of waiting for clicking agree button
    await page.goto('https://www.sreality.cz/en/search/for-sale/apartments?order=cheapest')
    await page.waitForTimeout(3000)




    const properties = await page.$$eval('div.property.ng-scope', elements => {
        return elements.map(element => element.innerHTML)
    })
    // name.forEach((el) => console.log(el.innerText))
    console.log(properties)


    
    
    
 


    await goToNextPage(page)
    await page.waitForTimeout(1000)
    browser.close()
    return 'done'
}


run().then((res)=> console.log(res))