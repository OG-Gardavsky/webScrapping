const { Client } = require("pg")
const dotenv = require("dotenv")
dotenv.config()


const connectDb = async () => {
    try {
        const client = new Client({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT
        })

        await client.connect()

        return client
    } catch (e) {
        console.log(e)
    }
}



const createStructure = async () => {
    const client = await connectDb()

    const text = `
        CREATE TABLE IF NOT EXISTS "estate" (
            "id" SERIAL,
            "title" VARCHAR(100),
            "url" VARCHAR(100),
            "image_url" VARCHAR(100),
            PRIMARY KEY ("id")
        );

        
        
        `

    try {
        const res = await client.query(text)
        await client.end()
    } catch (e) {
        console.log(e)
    }
    
    
}



module.exports = { connectDb, createStructure }