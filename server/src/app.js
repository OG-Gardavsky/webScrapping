const express = require('express')
const { connectDb } = require('./db')
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT || 4000

const app = express()
app.use(express.json())
app.use(cors())




app.get('/estates',async (req,  res) => {
    const queryCount = `SELECT count(id) FROM estates`
    const query =
        `SELECT id, title, url, imagesurls FROM estates
         ORDER BY id ASC
         LIMIT 20;
         `
        
    try {
        const dbClient = await connectDb()

        const estates = await dbClient.query(query)
        const estatesCount = await dbClient.query(queryCount)

        res.send({count: Number(estatesCount.rows[0].count), estates: estates.rows})

    } catch (e) {
        console.log(e)
    }
})


app.listen(port, () => {
    console.log("server is listening on port:" + port)
})