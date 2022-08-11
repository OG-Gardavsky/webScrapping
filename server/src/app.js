const express = require('express')
const { connectDb } = require('./utils')
require('dotenv').config()

const port = process.env.PORT || 4000

const app = express()
app.use(express.json())

// connectDb().then(()=> console.log('db filled'))
// .catch((error) => console.log(error))



app.get('/apartments',async (req,  res) => {
    await connectDb()
    res.send('apartments')
})


app.listen(port, () => {
    console.log("server is listening on port:" + port)
})