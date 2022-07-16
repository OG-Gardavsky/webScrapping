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
    
    
    await page.goto('https://www.sreality.cz/en/search/for-sale/apartments?order=cheapest')
    await page.waitForTimeout(5000)
    console.log('waited')



    const propertyObject =  (await page.$x('/html/body/div[2]/div[1]/div[2]/div[3]/div[3]/div/div/div/div/div[3]/div/div[1]'))[0]
    console.log(propertyObject)
    
    
    
    
    // await goToNextPage(page)




    








    await page.waitForTimeout(1000)
    browser.close()
    return 'done'
}


run().then((res)=> console.log(res))







//trying to switch the language
// await page.goto('https://www.sreality.cz/')
// await page.waitForTimeout(5000)
// console.log('waited')

//switch language
// const czechButton = (await page.$x('/html/body/div[2]/preact[1]/div/header/div[3]/div[1]/div/button'))[0]
// czechButton.click()
// const englishButton = (await page.$x('/html/body/div[2]/preact[1]/nav/ul/li[1]/a'))[0]
// englishButton.click()