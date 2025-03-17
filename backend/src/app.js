const express = require('express')
const cors = require('cors')
const postRoute =  require('./interface-adapters/routes/postRoute')
const connectDB = require('./infrastructure/database/db')

const app = express()

app.use(express.json());
app.use(cors({
    origin:"http://localhost:3002",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}))




app.use('/api',postRoute)



module.exports = app;    