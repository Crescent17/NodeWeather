const express = require("express")
const weather = express()
const port = 3000

weather.listen(port, function () {
    console.log(`The server is started on port ${port}`)
})