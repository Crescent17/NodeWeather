const express = require("express")
const https = require("https")
require("dotenv").config()
const apiKey = process.env.API_KEY
const weather = express()
const port = 3000


weather.listen(port, function () {
    console.log(`The server is started on port ${port}`)
})

weather.get("/", function (req, res) {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&units=metric&appid=${apiKey}`
    https.get(url, response => {
        response.on("data", data => {
            const weatherInfo = JSON.parse(data);
            const description = weatherInfo.weather[0].description
            const temperature = weatherInfo.main.temp;
            const city = weatherInfo.name
            const icon = weatherInfo.weather[0].icon
            const imgUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
            res.write(`<h1>${city}: ${description}, ${temperature} degrees</h1>`)
            res.write(`<img src=${imgUrl} alt="weather-img"/>`)
            res.send
        })
    })
})