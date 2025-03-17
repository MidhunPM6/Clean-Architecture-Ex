const express = require('express')
const cors = require('cors')

const app = express()
const port =3001
app.use(cors({
    origin:"http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}))


 
app.listen(port,()=>{
    console.log("Port running on " +port)
})

