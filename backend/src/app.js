const express = require('express')
const cors = require('cors')
const connectDB =require('./config')

const app = express()

app.use(cors({
    origin:"http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}))

module.exports = app;    