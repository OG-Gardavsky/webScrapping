const puppeteer = require('puppeteer')
const fs = require('fs')
const { createStructure } = require('./db')
const {browserConfig, scrapeEstates} = require("./utils");




const run = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage(browserConfig)
    
    // const realEstatesList = await scrapeEstates(page, 10, 20, 3)


    await createStructure()
    
    
    await page.waitForTimeout(1000)
    await browser.close()
    return 'done'
}


run().then((res)=> console.log(res))