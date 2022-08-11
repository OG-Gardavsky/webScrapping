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
        console.log('conected')


        const text = `
            CREATE TABLE IF NOT EXISTS "estate" (
                "id" SERIAL,
                "title" VARCHAR(100) NOT NULL,
                "url" VARCHAR(100) NOT NULL,
                PRIMARY KEY ("id")
            );`


        const res = await client.query(text)


        await client.end()
    } catch (error) {
        console.log(error)
    }
}

module.exports = { connectDb }