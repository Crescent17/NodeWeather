const express = require("express")
const https = require("https")
const weather = express()
const port = 3000


weather.listen(port, function () {
    console.log(`The server is started on port ${port}`)
})

weather.get("/", function (req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Minsk&units=metric&appid=3a245d1f250b7f01dfccc5333f1ebb12"
    https.get(url, response => {
        response.on("data", data => {
            const weatherInfo = JSON.parse(data);
            const description = weatherInfo.weather[0].description
            const temperature = weatherInfo.main.temp;
            const city = weatherInfo.name
            console.log(`${city}: ${description}, ${temperature} degrees`)
        })
    })
})