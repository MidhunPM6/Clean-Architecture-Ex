const express = require('express')
const app = require("./app");



const port = 3001

app.listen(port,()=>{
    console.log("Port running on " + port)
})

