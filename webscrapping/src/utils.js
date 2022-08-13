const fs = require('fs')
const { createDbStructure, connectDb } = require('./db')

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

const scrapeEstates =  async (page, numberOfPages, numberOfEstatesOnPage, numberOfImages) => {
    const realEstatesList = []
    for(let i = 0; i < numberOfPages; i++) {
        await goToSrealityPage(page, i+1)

        const onePageEstates = await scanOnepage(page, numberOfEstatesOnPage, numberOfImages)
        realEstatesList.push(...onePageEstates)
    }
    return realEstatesList
}

const browserConfig  = {
    headless: true,
    executablePath: '/usr/bin/chromium-browser',
    args: [
        '--no-sandbox',
        '--disable-gpu',
    ]
}


const getInsertEstateQuery = (id, title, url, imagesUrlArray) => {
    const imgArrayToInsert = JSON.stringify(imagesUrlArray)
        .replace('[', '{').replace(']', '}')

    return `INSERT INTO estates (id, title, url, imagesUrls) VALUES (${id}, '${title}', '${url}', '${imgArrayToInsert}');`
}

const writeToDB = async (dbClient, estates) => {
    let query = ''
    
    try {
        estates.forEach(({title, url, imageLinks}, index) => {
            query += getInsertEstateQuery(index, title, url, imageLinks)    
        });

        await dbClient.query(query)

    } catch (e) {
        console.log(e)
    }
}





module.exports = { goToSrealityPage, getEstateXpath, scanOnepage, scrapeEstates, browserConfig, writeToDB}