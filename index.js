const express = require('express')
const router = require('./routes/route')
require('dotenv').config();           // env la emport kel
const app = express()

// start middleware (codes)


app.use(express.json())                  //this middleware for reciving data in JSON format

// start Router
app.use(router)
// end router

// end middleware
// liveservice()
const port = process.env.PORT || 3000               // environment variable la  use krya sathi process.ene.veriable name
const host = "127.0.0.1"
const callback = () => {
    console.log(`listening on port ${port}`);
}

app.listen(port, host, callback)

