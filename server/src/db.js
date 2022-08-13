const { Client } = require("pg")
const dotenv = require("dotenv")
dotenv.config()


const connectDb = async () => {
    try {
        const dbClient = new Client({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT
        })



        await dbClient.connect()
        return dbClient
    } catch (e) {
        console.log(e)
    }
}

module.exports = { connectDb }