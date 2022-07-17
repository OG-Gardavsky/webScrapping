const puppeteer = require('puppeteer');


const goToNextPage = async(page) => {
    const nextButton = (await page.$x('/html/body/div[2]/div[1]/div[2]/div[3]/div[3]/div/div/div/div/div[3]/div/div[22]/ul[1]/li[12]/a'))[0]
    nextButton.click()
}

const getEstateXpath = (index) => {
    return `//*[@id="page-layout"]/div[2]/div[3]/div[3]/div/div/div/div/div[3]/div/div[${index}]`
}

const scan1page = async(page, numberOfEstates) => {
    const realEstates = []

    await page.waitForXPath(getEstateXpath(1));


    for(let i = 1; i <= 20; i++) {
        const baseXpath = getEstateXpath(i)
        const elTitle = await page.$x(`${baseXpath}//span[@class="name ng-binding"]`)
        const title  = await page.evaluate(el => el.textContent, elTitle[0])

        const elImage = await page.$x(`${baseXpath}//img`)
        const imageLink  = await page.evaluate(el => el.getAttribute('src'), elImage[0])

        const elUrlParams = await page.$x(`${baseXpath}//a[@ng-href]`)
        const urlParams  = await page.evaluate(el => el.getAttribute('ng-href'), elUrlParams[0])
        const url = `https://www.sreality.cz/${urlParams}`

        realEstates.push({
            title,
            imageLink,
            url
        })
    }

    return realEstates
}

const run = async () => {
    const browser = await puppeteer.launch({
        headless: false,    
    });
    const page = await browser.newPage()
    
    
    // because of waiting for clicking agree button
    await page.goto('https://www.sreality.cz/en/search/for-sale/apartments?order=cheapest')
    await page.waitForTimeout(3000)

    let realEstatesList = []
    for(let i = 0; i < 10; i++) {
        const onePageEstates = await scan1page(page, 20)
        realEstatesList = [...realEstatesList, ...onePageEstates]
        await goToNextPage(page)
        // await page.waitForTimeout(1000)
    }

    console.log(realEstatesList.length)
    

 

    
    // await page.waitForTimeout(1000)
    browser.close()
    return 'done'
}


run().then((res)=> console.log(res))