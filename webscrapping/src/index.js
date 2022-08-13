const puppeteer = require('puppeteer')
const fs = require('fs')
const { createDbStructure, connectDb } = require('./db')
const {browserConfig, scrapeEstates, writeToDB} = require("./utils")
const dotenv = require("dotenv")
dotenv.config()


const run = async () => {
    const browser = await puppeteer.launch(browserConfig)
    const page = await browser.newPage()
    
    const realEstatesList = await scrapeEstates(page, 10, 20, 3)

    const dbClient = await connectDb()
    await createDbStructure(dbClient)
    await writeToDB(dbClient, realEstatesList)
    await dbClient.end()
    
    await page.waitForTimeout(1000)
    await browser.close()
}

run()