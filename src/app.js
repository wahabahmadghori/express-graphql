const express = require('express')
const {} = require('express-graphql')

const app = express()

app.listen(5000, ()=>{
    console.log('server is running at http://localhost:5000/')
})