const puppeteer = require('puppeteer')
const fs = require('fs')


const goToSrealityPage = async(page, pageNumber) => {
    await page.goto(`https://www.sreality.cz/en/search/for-sale/apartments?page=${pageNumber}&order=cheapest`)
}

const getEstateXpath = (index) => {
    return `//*[@id="page-layout"]/div[2]/div[3]/div[3]/div/div/div/div/div[3]/div/div[${index}]`
}

const scanOnepage = async(page, numberOfEstates, numberOfImages) => {
    const realEstates = []
    await page.waitForXPath(getEstateXpath(1));

    for(let i = 1; i <= numberOfEstates; i++) {
        const baseXpath = getEstateXpath(i)
        const elTitle = await page.$x(`${baseXpath}//span[@class="name ng-binding"]`)
        const title  = await page.evaluate(el => el.textContent, elTitle[0])

        const imageLinks = []
        for(let i = 1; i < numberOfImages + 1; i++) {
            const elImage = await page.$x(`${baseXpath}//a[${i}]/img`)
            const imageLink  = await page.evaluate(el => el.getAttribute('src'), elImage[0])
            imageLinks.push(imageLink)
        }
        

        const elUrlParams = await page.$x(`${baseXpath}//a[@ng-href]`)
        const urlParams  = await page.evaluate(el => el.getAttribute('ng-href'), elUrlParams[0])
        const url = `https://www.sreality.cz/${urlParams}`

        realEstates.push({
            title,
            imageLinks,
            url
        })
    }
    return realEstates
}


const run = async () => {
    const browser = await puppeteer.launch({
        headless: true,
        executablePath: '/usr/bin/chromium-browser',
        args: [
          '--no-sandbox',
          '--disable-gpu',
        ]
    })
    const page = await browser.newPage()
    
    const realEstatesList = []
    for(let i = 0; i < 10; i++) {
        await goToSrealityPage(page, i+1)
        
        const onePageEstates = await scanOnepage(page, 20, 3)
        realEstatesList.push(...onePageEstates)
    }


    fs.writeFile('results.json', JSON.stringify(realEstatesList), function (err,data) {
        if (err) {
            return console.log(err)
        }
        console.log(data)
    })
    
    
    await page.waitForTimeout(1000)
    browser.close()
    return 'done'
}


run().then((res)=> console.log(res))