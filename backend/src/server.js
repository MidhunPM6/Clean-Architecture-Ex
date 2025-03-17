const express = require('express')
const app = require("./app");



const port = 3005

app.listen(port,()=>{
    console.log("Port running on " + port)
})

