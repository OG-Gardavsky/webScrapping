const express = require('express')
require('dotenv').config()

const port = process.env.PORT || 4000

const app = express()
app.use(express.json());

app.get('/apartments',async (req,  res) => {
    res.send('apartments')
})


app.listen(port, () => {
    console.log("server is listening on port:" + port);
});