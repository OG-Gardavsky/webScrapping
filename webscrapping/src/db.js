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


const createDbStructure = async (dbClient) => {
    const query = `
        DROP TABLE IF EXISTS images;
        DROP TABLE IF EXISTS estates;
        
        CREATE TABLE estates (
            id SERIAL NOT NULL,
            title text,
            url text,
            PRIMARY KEY ("id")
        );
        
        CREATE TABLE images (
            imageUrl text,
            estateId INT,
            FOREIGN KEY (estateId) REFERENCES estates (id)
        );
    `

    try {
        const res = await dbClient.query(query)
    } catch (e) {
        console.log(e)
    }
}



module.exports = { connectDb, createDbStructure }