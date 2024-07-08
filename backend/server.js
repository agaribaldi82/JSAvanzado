const express = require('express');
const app = express()
const cookieParser = require('cookie-parser');
const exp = require('constants');
require("dotenv").config()

app.use(express.json())
app.use(cookieParser())
app.use((req, res, next) => {
    console.log(`${req.method}, ${req.path}`)
    next()
})

const PORT = process.env.Puerto || 3000 

app.listen(PORT, ()=>{
    console.log(`El server esta funcionando en el puerto ${PORT}`)
})

app.get('/', (req, res)=> {
    let index_content = require('fs').readFileSync("./views/index.html", "utf-8")
    res.send(index_content)
})

app.get("/list-cookies", (req, res) =>{
    console.log(req.cookies)
    res.send(req.cookies)
})