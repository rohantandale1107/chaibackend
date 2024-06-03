require('dotenv').config()
const express = require('express')

// import express from "express"

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/rohan',(req,res)=>{
    res.send("hi rohan kya haal hai")
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login in website</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})