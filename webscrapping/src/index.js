const puppeteer = require('puppeteer')
const fs = require('fs')
const { createStructure, connectDb } = require('./db')
const {browserConfig, scrapeEstates} = require("./utils");




const run = async () => {
    const browser = await puppeteer.launch(browserConfig)
    const page = await browser.newPage()
    
    // const realEstatesList = await scrapeEstates(page, 10, 20, 3)


    await connectDb()
    
    
    await page.waitForTimeout(1000)
    await browser.close()
    return 'done'
}


run().then((res)=> console.log(res))