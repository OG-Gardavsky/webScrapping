const { Client } = require("pg")
const dotenv = require("dotenv")
dotenv.config()


connectDb()

module.exports = { connectDb }